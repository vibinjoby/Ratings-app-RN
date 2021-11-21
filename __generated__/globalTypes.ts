/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum UserType {
  customer = "customer",
  owner = "owner",
}

export interface CreateAdminInput {
  username: string;
  password: string;
}

export interface CreateUserInput {
  email: string;
  fullName: string;
  password: string;
  userType: UserType;
}

export interface LoginInput {
  email: string;
  password: string;
  userType: UserType;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
