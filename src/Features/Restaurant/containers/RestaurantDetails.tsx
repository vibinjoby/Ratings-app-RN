import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

import RestaurantDetailView from '../components/RestaurantDetailView'
import { useRestaurantDetails, useSaveOwnerReply } from '../hooks'
import ApiResult from '../../../components/ApiResult'
import { DetailsRouteProps } from '../types'
import userInfoVars from '../../../store'
import { ScreenNames } from '../constants'

const RestaurantDetails = () => {
  const route = useRoute<DetailsRouteProps>()
  const userInfo = userInfoVars()
  const navigation = useNavigation()
  const { restaurantId } = route.params
  const { data, loading, error, refetch } = useRestaurantDetails(restaurantId)
  const { onSaveReply } = useSaveOwnerReply()

  const handleAddReview = () => navigation.navigate(ScreenNames.ADD_REVIEW)

  const handleSaveOwnerReply = async (id: number, reply: string) => {
    await onSaveReply({ variables: { reviewId: id, ownerReply: reply } })
    refetch()
  }

  const RenderView = () => {
    if (!data) return <></>

    return (
      <RestaurantDetailView
        restaurantData={data.getRestaurant}
        userType={userInfo.userInfo?.userType}
        onAddReview={handleAddReview}
        onSaveReply={handleSaveOwnerReply}
      />
    )
  }

  return (
    <ApiResult loading={loading} error={error}>
      {RenderView()}
    </ApiResult>
  )
}

export default RestaurantDetails
