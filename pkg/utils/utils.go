// This file is part of MinIO Console Server
// Copyright (c) 2022 MinIO, Inc.
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

package utils

import "github.com/google/uuid"

// NewUUID - get a random UUID.
func NewUUID() (string, error) {
	u, err := uuid.NewRandom()
	if err != nil {
		return "", err
	}
	return u.String(), nil
}

// Key used for Get/SetReqInfo
type key string

const (
	ContextLogKey            = key("console-log")
	ContextRequestID         = key("request-id")
	ContextRequestUserID     = key("request-user-id")
	ContextRequestUserAgent  = key("request-user-agent")
	ContextRequestHost       = key("request-host")
	ContextRequestRemoteAddr = key("request-remote-addr")
	ContextAuditKey          = key("request-audit-entry")
)
