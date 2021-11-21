/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateUserInput } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: Register
// ====================================================

export interface Register_createUser {
  __typename: "User";
  fullName: string;
  email: string;
}

export interface Register {
  createUser: Register_createUser;
}

export interface RegisterVariables {
  createUserInput: CreateUserInput;
}
