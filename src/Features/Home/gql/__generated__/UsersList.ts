/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserType } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: UsersList
// ====================================================

export interface UsersList_users {
  __typename: "User";
  id: number;
  fullName: string;
  email: string;
  userType: UserType;
}

export interface UsersList {
  users: UsersList_users[];
}
