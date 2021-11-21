/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateAdminInput } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: AdminLogin
// ====================================================

export interface AdminLogin_loginAsAdmin {
  __typename: "LoginOutput";
  token: string;
}

export interface AdminLogin {
  loginAsAdmin: AdminLogin_loginAsAdmin;
}

export interface AdminLoginVariables {
  adminInput: CreateAdminInput;
}
