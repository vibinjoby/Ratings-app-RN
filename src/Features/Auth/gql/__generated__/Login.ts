/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LoginInput } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface Login_login {
  __typename: "LoginOutput";
  token: string;
}

export interface Login {
  login: Login_login;
}

export interface LoginVariables {
  loginInput: LoginInput;
}
