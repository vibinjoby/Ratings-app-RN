import React, { useEffect } from 'react'
import { FlatList, Text, View } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../store'
import { filterReview, getAllReviews, modifyReview } from '../../store/reducers/admin'
import styles from './styles'
import ReviewBlock from '../../components/ReviewBlock'
import { Restaurant } from '../../store/reducers/restaurant'

const AdminReviewDetail: React.FC = () => {
  const dispatch = useDispatch()

  const token = useSelector((state: RootState) => state.admin.token)
  const route = useRoute<any>()
  const reviews = useSelector(
    (state: RootState) =>
      state.admin.restaurants.find((restaurant: Restaurant) => restaurant?._id === route.params.id), //@ts-ignore
  )?.reviews

  useEffect(() => {
    if (!token) return
    const { id } = route?.params
    dispatch(getAllReviews(token, id))
  }, [token])

  const onSelectedOption = (index: number, reviewId: string) => {
    const restaurantId = route.params.id
    // Delete review
    if (index === 0) {
      dispatch(filterReview(token, reviewId, restaurantId))
    }
  }

  const onEditSave = (
    reviewId: string,
    customerResponse?: string,
    ownerResponse?: string,
    stars?: number,
  ) => {
    dispatch(modifyReview(token, reviewId, customerResponse, ownerResponse, stars))
  }

  if (!reviews || reviews.length === 0) {
    return (
      <View style={styles.container}>
        <View style={styles.noReviewWrapper}>
          <Text style={styles.noReviewTxt}>No Reviews yet!!</Text>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <ReviewBlock
            reviewId={item?._id} //@ts-ignore
            reviewerName={item?.rated_user_id?.fullName} //@ts-ignore
            comments={item?.comments} //@ts-ignore
            visitDate={item?.visit_date} //@ts-ignore
            ratings={item?.ratings} //@ts-ignore
            owner_reply={item?.owner_reply}
            showThreeDots
            onOptionPress={(index) => onSelectedOption(index, item?._id)}
            isEditResponse
            onEditSave={onEditSave}
          />
        )}
      />
    </View>
  )
}

export default AdminReviewDetail
