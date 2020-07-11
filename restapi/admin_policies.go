// This file is part of MinIO Console Server
// Copyright (c) 2020 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

package restapi

import (
	"bytes"
	"context"
	"encoding/json"
	"log"

	"github.com/go-openapi/errors"

	"github.com/go-openapi/runtime/middleware"
	"github.com/go-openapi/swag"
	"github.com/minio/mcs/models"
	"github.com/minio/mcs/restapi/operations"
	"github.com/minio/mcs/restapi/operations/admin_api"
	iampolicy "github.com/minio/minio/pkg/iam/policy"
)

func registersPoliciesHandler(api *operations.McsAPI) {
	// List Policies
	api.AdminAPIListPoliciesHandler = admin_api.ListPoliciesHandlerFunc(func(params admin_api.ListPoliciesParams, session *models.Principal) middleware.Responder {
		listPoliciesResponse, err := getListPoliciesResponse(session)
		if err != nil {
			return admin_api.NewListPoliciesDefault(500).WithPayload(&models.Error{Code: 500, Message: swag.String(err.Error())})
		}
		return admin_api.NewListPoliciesOK().WithPayload(listPoliciesResponse)
	})
	// Policy Info
	api.AdminAPIPolicyInfoHandler = admin_api.PolicyInfoHandlerFunc(func(params admin_api.PolicyInfoParams, session *models.Principal) middleware.Responder {
		policyInfo, err := getPolicyInfoResponse(session, params)
		if err != nil {
			return admin_api.NewPolicyInfoDefault(500).WithPayload(&models.Error{Code: 500, Message: swag.String(err.Error())})
		}
		return admin_api.NewPolicyInfoOK().WithPayload(policyInfo)
	})
	// Add Policy
	api.AdminAPIAddPolicyHandler = admin_api.AddPolicyHandlerFunc(func(params admin_api.AddPolicyParams, session *models.Principal) middleware.Responder {
		policyResponse, err := getAddPolicyResponse(session, params.Body)
		if err != nil {
			return admin_api.NewAddPolicyDefault(500).WithPayload(&models.Error{
				Code:    500,
				Message: swag.String(err.Error()),
			})
		}
		return admin_api.NewAddPolicyCreated().WithPayload(policyResponse)
	})
	// Remove Policy
	api.AdminAPIRemovePolicyHandler = admin_api.RemovePolicyHandlerFunc(func(params admin_api.RemovePolicyParams, session *models.Principal) middleware.Responder {
		if err := getRemovePolicyResponse(session, params); err != nil {
			return admin_api.NewRemovePolicyDefault(500).WithPayload(&models.Error{Code: 500, Message: swag.String(err.Error())})
		}
		return admin_api.NewRemovePolicyNoContent()
	})
	// Set Policy
	api.AdminAPISetPolicyHandler = admin_api.SetPolicyHandlerFunc(func(params admin_api.SetPolicyParams, session *models.Principal) middleware.Responder {
		if err := getSetPolicyResponse(session, params.Name, params.Body); err != nil {
			return admin_api.NewSetPolicyDefault(500).WithPayload(&models.Error{Code: 500, Message: swag.String(err.Error())})
		}
		return admin_api.NewSetPolicyNoContent()
	})
}

// listPolicies calls MinIO server to list all policy names present on the server.
// listPolicies() converts the map[string][]byte returned by client.listPolicies()
// to []*models.Policy by iterating over each key in policyRawMap and
// then using Unmarshal on the raw bytes to create a *models.Policy
func listPolicies(ctx context.Context, client MinioAdmin) ([]*models.Policy, error) {
	policyMap, err := client.listPolicies(ctx)
	var policies []*models.Policy
	if err != nil {
		return nil, err
	}
	for name, policy := range policyMap {
		policy, err := parsePolicy(name, policy)
		if err != nil {
			return nil, err
		}
		policies = append(policies, policy)
	}
	return policies, nil
}

// getListPoliciesResponse performs listPolicies() and serializes it to the handler's output
func getListPoliciesResponse(session *models.Principal) (*models.ListPoliciesResponse, error) {
	ctx := context.Background()
	mAdmin, err := newMAdminClient(session)
	if err != nil {
		log.Println("error creating Madmin Client:", err)
		return nil, err
	}
	// create a MinIO Admin Client interface implementation
	// defining the client to be used
	adminClient := adminClient{client: mAdmin}

	policies, err := listPolicies(ctx, adminClient)
	if err != nil {
		log.Println("error listing policies:", err)
		return nil, err
	}
	// serialize output
	listPoliciesResponse := &models.ListPoliciesResponse{
		Policies: policies,
		Total:    int64(len(policies)),
	}
	return listPoliciesResponse, nil
}

// removePolicy() calls MinIO server to remove a policy based on name.
func removePolicy(ctx context.Context, client MinioAdmin, name string) error {
	err := client.removePolicy(ctx, name)
	if err != nil {
		return err
	}
	return nil
}

// getRemovePolicyResponse() performs removePolicy() and serializes it to the handler's output
func getRemovePolicyResponse(session *models.Principal, params admin_api.RemovePolicyParams) error {
	ctx := context.Background()
	if params.Name == "" {
		log.Println("error policy name not in request")
		return errors.New(500, "error policy name not in request")
	}
	mAdmin, err := newMAdminClient(session)
	if err != nil {
		log.Println("error creating Madmin Client:", err)
		return err
	}
	// create a MinIO Admin Client interface implementation
	// defining the client to be used
	adminClient := adminClient{client: mAdmin}

	if err := removePolicy(ctx, adminClient, params.Name); err != nil {
		log.Println("error removing policy:", err)
		return err
	}
	return nil
}

// addPolicy calls MinIO server to add a canned policy.
// addPolicy() takes name and policy in string format, policy
// policy must be string in json format, in the future this will change
// to a Policy struct{} - https://github.com/minio/minio/issues/9171
func addPolicy(ctx context.Context, client MinioAdmin, name, policy string) (*models.Policy, error) {
	iamp, err := iampolicy.ParseConfig(bytes.NewReader([]byte(policy)))
	if err != nil {
		return nil, err
	}
	if err := client.addPolicy(ctx, name, iamp); err != nil {
		return nil, err
	}
	policyObject, err := policyInfo(ctx, client, name)
	if err != nil {
		return nil, err
	}
	return policyObject, nil
}

// getAddPolicyResponse performs addPolicy() and serializes it to the handler's output
func getAddPolicyResponse(session *models.Principal, params *models.AddPolicyRequest) (*models.Policy, error) {
	ctx := context.Background()
	if params == nil {
		log.Println("error AddPolicy body not in request")
		return nil, errors.New(500, "error AddPolicy body not in request")
	}

	mAdmin, err := newMAdminClient(session)
	if err != nil {
		log.Println("error creating Madmin Client:", err)
		return nil, err
	}
	// create a MinIO Admin Client interface implementation
	// defining the client to be used
	adminClient := adminClient{client: mAdmin}
	policy, err := addPolicy(ctx, adminClient, *params.Name, *params.Policy)
	if err != nil {
		log.Println("error adding policy")
		return nil, err
	}
	return policy, nil
}

// policyInfo calls MinIO server to retrieve information of a canned policy.
// policyInfo() takes a policy name, obtains the []byte (represents a string in JSON format)
// and return it as *models.Policy , in the future this will change
// to a Policy struct{} - https://github.com/minio/minio/issues/9171
func policyInfo(ctx context.Context, client MinioAdmin, name string) (*models.Policy, error) {
	policyRaw, err := client.getPolicy(ctx, name)
	if err != nil {
		return nil, err
	}
	policy, err := parsePolicy(name, policyRaw)
	if err != nil {
		return nil, err
	}
	return policy, nil
}

// getPolicyInfoResponse performs policyInfo() and serializes it to the handler's output
func getPolicyInfoResponse(session *models.Principal, params admin_api.PolicyInfoParams) (*models.Policy, error) {
	ctx := context.Background()
	mAdmin, err := newMAdminClient(session)
	if err != nil {
		log.Println("error creating Madmin Client:", err)
		return nil, err
	}
	// create a MinIO Admin Client interface implementation
	// defining the client to be used
	adminClient := adminClient{client: mAdmin}
	policy, err := policyInfo(ctx, adminClient, params.Name)
	if err != nil {
		log.Println("error getting  group info:", err)
		return nil, err
	}
	return policy, nil
}

// setPolicy() calls MinIO server to assign policy to a group or user.
func setPolicy(ctx context.Context, client MinioAdmin, name, entityName string, entityType models.PolicyEntity) error {
	isGroup := false
	if entityType == models.PolicyEntityGroup {
		isGroup = true
	}
	if err := client.setPolicy(ctx, name, entityName, isGroup); err != nil {
		return err
	}
	return nil
}

// getSetPolicyResponse() performs setPolicy() and serializes it to the handler's output
func getSetPolicyResponse(session *models.Principal, name string, params *models.SetPolicyRequest) error {
	ctx := context.Background()
	if name == "" {
		log.Println("error policy name not in request")
		return errors.New(500, "error policy name not in request")
	}
	mAdmin, err := newMAdminClient(session)
	if err != nil {
		log.Println("error creating Madmin Client:", err)
		return err
	}
	// create a MinIO Admin Client interface implementation
	// defining the client to be used
	adminClient := adminClient{client: mAdmin}

	if err := setPolicy(ctx, adminClient, name, *params.EntityName, params.EntityType); err != nil {
		log.Println("error setting policy:", err)
		return err
	}
	return nil
}

// parsePolicy() converts from *rawPolicy to *models.Policy
func parsePolicy(name string, rawPolicy *iampolicy.Policy) (*models.Policy, error) {
	stringPolicy, err := json.Marshal(rawPolicy)
	if err != nil {
		return nil, err
	}
	policy := &models.Policy{
		Name:   name,
		Policy: string(stringPolicy),
	}
	return policy, nil
}
