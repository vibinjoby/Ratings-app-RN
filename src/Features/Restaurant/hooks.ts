import { useMutation, useQuery } from '@apollo/client'

import { CreateReviewInput } from '../../../__generated__/globalTypes'
import { CreateReviewMutation } from './gql/CreateReviewMutation'
import { RestaurantDetails } from './gql/RestaurantDetails'
import { SaveReviewReplyMutation } from './gql/SaveReviewReplyMutation'

export const useRestaurantDetails = (id: number) => {
  const { ...rest } = useQuery(RestaurantDetails, {
    variables: {
      id,
    },
    fetchPolicy: 'cache-and-network',
  })
  return { ...rest }
}

export const useAddReview = (createReviewInput: CreateReviewInput) => {
  const [onAddRestaurantMutate, { ...rest }] = useMutation(CreateReviewMutation, {
    variables: {
      createReviewInput,
    },
    fetchPolicy: 'network-only',
  })
  return { onAddRestaurantMutate, ...rest }
}

export const useSaveOwnerReply = () => {
  const [onSaveReply, { ...rest }] = useMutation(SaveReviewReplyMutation, {
    fetchPolicy: 'network-only',
  })
  return { onSaveReply, ...rest }
}
