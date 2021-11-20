import { useMutation } from '@apollo/client'

import { LoginInput } from '../../../__generated__/globalTypes'
import { LoginMutation } from './gql/LoginMutation'

export const useLogin = (loginInput: LoginInput) => {
  const [onLoginMutate, { ...rest }] = useMutation(LoginMutation, {
    fetchPolicy: 'network-only',
    variables: { loginInput },
  })

  return { onLoginMutate, ...rest }
}
