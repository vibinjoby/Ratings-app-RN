import { useQuery, useMutation } from '@apollo/client'

import { CreateRestaurantInput } from '../../../__generated__/globalTypes'
import { AddRestaurantMutation } from './gql/AddRestaurant'
import { OwnerRestaurants } from './gql/OwnerRestaurants'
import { RemoveReviewMutation } from './gql/RemoveReviewMutation'
import { RemoveUserMutation } from './gql/RemoveUserMutation'
import { RestaurantList } from './gql/RestaurantList'
import { ReviewsList } from './gql/ReviewsList'
import { UpdateReviewMutation } from './gql/UpdateReviewMutation'
import { UsersList } from './gql/UsersList'
import { MyRestaurants } from './gql/__generated__/MyRestaurants'
import {
  RemoveReviewMutation as RemoveReviewMutationData,
  RemoveReviewMutationVariables,
} from './gql/__generated__/RemoveReviewMutation'

import {
  RestaurantList as RestaurantData,
  RestaurantListVariables,
} from './gql/__generated__/RestaurantList'
import { ReviewsList as ReviewsData, ReviewsListVariables } from './gql/__generated__/ReviewsList'
import {
  UpdateReviewMutation as UpdateReviewMutationData,
  UpdateReviewMutationVariables,
} from './gql/__generated__/UpdateReviewMutation'

export const useAllRestaurants = () => {
  const { ...rest } = useQuery<RestaurantData, RestaurantListVariables>(RestaurantList, {
    variables: {
      first: 3,
      offset: 0,
    },
    fetchPolicy: 'cache-and-network',
  })
  return { ...rest }
}

export const useOwnerRestaurants = () => {
  const { ...rest } = useQuery<MyRestaurants>(OwnerRestaurants, {
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

export const useRemoveReview = () => {
  const [removeReviewMutate, { ...rest }] = useMutation<
    RemoveReviewMutationData,
    RemoveReviewMutationVariables
  >(RemoveReviewMutation, {
    fetchPolicy: 'network-only',
  })
  return { removeReviewMutate, ...rest }
}

export const useAllReviewsByRestaurantId = (restaurantId: number) => {
  const { ...rest } = useQuery<ReviewsData, ReviewsListVariables>(ReviewsList, {
    fetchPolicy: 'cache-and-network',
    variables: { restaurantId },
  })
  return { ...rest }
}

export const useUpdateReview = () => {
  const [updateReviewMutate, { ...rest }] = useMutation<
    UpdateReviewMutationData,
    UpdateReviewMutationVariables
  >(UpdateReviewMutation, {
    fetchPolicy: 'network-only',
  })
  return { updateReviewMutate, ...rest }
}
