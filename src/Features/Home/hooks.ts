import { useQuery, useMutation } from '@apollo/client'

import { CreateRestaurantInput } from '../../../__generated__/globalTypes'
import { AddRestaurantMutation } from './gql/AddRestaurant'
import { OwnerRestaurants } from './gql/OwnerRestaurants'
import { RemoveUserMutation } from './gql/RemoveUserMutation'
import { RestaurantList } from './gql/RestaurantList'
import { UsersList } from './gql/UsersList'

export const useAllRestaurants = () => {
  const { ...rest } = useQuery(RestaurantList, {
    variables: {
      limit: 3,
      offset: 0,
    },
    fetchPolicy: 'cache-and-network',
  })
  return { ...rest }
}

export const useOwnerRestaurants = () => {
  const { ...rest } = useQuery(OwnerRestaurants, {
    fetchPolicy: 'cache-and-network',
  })
  return { ...rest }
}

export const useAddRestaurant = (createRestaurantInput: CreateRestaurantInput) => {
  const [onAddRestaurantMutate, { ...rest }] = useMutation(AddRestaurantMutation, {
    variables: {
      createRestaurantInput,
    },
    fetchPolicy: 'network-only',
  })
  return { onAddRestaurantMutate, ...rest }
}

export const useAllUsers = () => {
  const { ...rest } = useQuery(UsersList, {
    fetchPolicy: 'cache-and-network',
  })
  return { ...rest }
}

export const useRemoveUser = () => {
  const [removeUserMutate, { ...rest }] = useMutation(RemoveUserMutation, {
    fetchPolicy: 'network-only',
  })
  return { removeUserMutate, ...rest }
}
