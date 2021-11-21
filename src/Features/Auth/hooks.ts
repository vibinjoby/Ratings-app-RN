import { useMutation } from '@apollo/client'

import { CreateAdminInput, CreateUserInput, LoginInput } from '../../../__generated__/globalTypes'
import { AdminLoginMutation } from './gql/AdminLoginMutation'
import { LoginMutation } from './gql/LoginMutation'
import { RegisterMutation } from './gql/RegisterMutation'

export const useLogin = (loginInput: LoginInput) => {
  const [onLoginMutate, { ...rest }] = useMutation(LoginMutation, {
    fetchPolicy: 'network-only',
    variables: { loginInput },
  })

  return { onLoginMutate, ...rest }
}

export const useAdminLogin = (adminInput: CreateAdminInput) => {
  const [onAdminLoginMutate, { ...rest }] = useMutation(AdminLoginMutation, {
    fetchPolicy: 'network-only',
    variables: { adminInput },
  })
  return { onAdminLoginMutate, ...rest }
}

export const useRegister = (createUserInput: CreateUserInput) => {
  const [onRegisterMutate, { ...rest }] = useMutation(RegisterMutation, {
    fetchPolicy: 'network-only',
    variables: { createUserInput },
  })

  return { onRegisterMutate, ...rest }
}
