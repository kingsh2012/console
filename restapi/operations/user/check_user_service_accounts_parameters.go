// Code generated by go-swagger; DO NOT EDIT.

// This file is part of MinIO Console Server
// Copyright (c) 2023 MinIO, Inc.
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
//

package user

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"io"
	"net/http"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/runtime"
	"github.com/go-openapi/runtime/middleware"
)

// NewCheckUserServiceAccountsParams creates a new CheckUserServiceAccountsParams object
//
// There are no default values defined in the spec.
func NewCheckUserServiceAccountsParams() CheckUserServiceAccountsParams {

	return CheckUserServiceAccountsParams{}
}

// CheckUserServiceAccountsParams contains all the bound params for the check user service accounts operation
// typically these are obtained from a http.Request
//
// swagger:parameters CheckUserServiceAccounts
type CheckUserServiceAccountsParams struct {

	// HTTP Request Object
	HTTPRequest *http.Request `json:"-"`

	/*
	  Required: true
	  In: body
	*/
	SelectedUsers []string
}

// BindRequest both binds and validates a request, it assumes that complex things implement a Validatable(strfmt.Registry) error interface
// for simple values it will use straight method calls.
//
// To ensure default values, the struct must have been initialized with NewCheckUserServiceAccountsParams() beforehand.
func (o *CheckUserServiceAccountsParams) BindRequest(r *http.Request, route *middleware.MatchedRoute) error {
	var res []error

	o.HTTPRequest = r

	if runtime.HasBody(r) {
		defer r.Body.Close()
		var body []string
		if err := route.Consumer.Consume(r.Body, &body); err != nil {
			if err == io.EOF {
				res = append(res, errors.Required("selectedUsers", "body", ""))
			} else {
				res = append(res, errors.NewParseError("selectedUsers", "body", "", err))
			}
		} else {
			// no validation required on inline body
			o.SelectedUsers = body
		}
	} else {
		res = append(res, errors.Required("selectedUsers", "body", ""))
	}
	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
