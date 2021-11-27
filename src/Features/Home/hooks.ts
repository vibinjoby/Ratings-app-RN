import { useQuery, useMutation } from '@apollo/client'

import { CreateRestaurantInput } from '../../../__generated__/globalTypes'
import { AddRestaurantMutation } from './gql/AddRestaurant'
import { OwnerRestaurants } from './gql/OwnerRestaurants'
import { RestaurantList } from './gql/RestaurantList'

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
