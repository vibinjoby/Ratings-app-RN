import React from 'react'
import { useRoute } from '@react-navigation/native'

import AllReviewsView from '../components/AllReviewsView'
import ApiResult from '../../../../components/ApiResult'
import { DetailsRouteProps } from '../../../Restaurant/types'
import { useRemoveReview, useAllReviewsByRestaurantId, useUpdateReview } from '../../hooks'
import { UpdateReviewInput } from '../../../../../__generated__/globalTypes'

const AllReviews: React.FC = () => {
  const route = useRoute<DetailsRouteProps>()
  const { restaurantId } = route.params

  const { removeReviewMutate } = useRemoveReview()
  const { updateReviewMutate } = useUpdateReview()
  const { data, loading, error, refetch } = useAllReviewsByRestaurantId(restaurantId)

  const handleDeleteReview = async (reviewId: number) => {
    //delete review via api
    await removeReviewMutate({ variables: { id: reviewId } })
    refetch()
  }

  const handleEditSave = async ({
    id,
    comments,
    ratings,
    visitDate,
    ownerReply,
  }: UpdateReviewInput) => {
    //update review via api
    await updateReviewMutate({
      variables: {
        updateReviewInput: {
          id,
          comments,
          ratings,
          visitDate,
          ownerReply,
        },
      },
    })
    refetch()
  }

  if (!data) return <></>

  return (
    <ApiResult loading={loading} error={error}>
      <AllReviewsView
        reviews={data.findReviewsByRestaurantId}
        onDelete={handleDeleteReview}
        onEditSave={handleEditSave}
      />
    </ApiResult>
  )
}

export default AllReviews
