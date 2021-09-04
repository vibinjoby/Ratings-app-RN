import React, { useEffect, useState } from 'react'
import { FlatList, Text, View, TouchableOpacity } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { RootState } from '../../store'
import {
  filterRestaurant,
  filterReview,
  getAllReviews,
  modifyReview,
} from '../../store/reducers/admin'
import styles from './styles'
import ReviewBlock from '../../components/ReviewBlock'
import { Restaurant } from '../../store/reducers/customer'
import Colors from '../../utilities/colors'
import ModalPopup from '../../components/ModalPopup'

const AdminReviewDetail: React.FC = () => {
  const [isDeletePop, setIsDeletePop] = useState(false)

  const dispatch = useDispatch()
  const token = useSelector((state: RootState) => state.admin.token)
  const route = useRoute<any>()
  const navigation = useNavigation()
  const reviews = useSelector(
    (state: RootState) =>
      state.admin.restaurants.find((restaurant: Restaurant) => restaurant?._id === route.params.id), //@ts-ignore
  )?.reviews

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity activeOpacity={0.9} onPress={toggleModal}>
          <AntDesign name="delete" size={25} color={Colors.appOrange} style={styles.deleteIc} />
        </TouchableOpacity>
      ),
    })
  }, [])

  useEffect(() => {
    if (!token) return
    const { id } = route?.params
    dispatch(getAllReviews(token, id))
  }, [token])

  const toggleModal = () => {
    setIsDeletePop((val) => !val)
  }

  const onDelete = () => {
    toggleModal()
    const restaurantId = route.params.id
    dispatch(filterRestaurant(token, restaurantId))
    navigation.goBack()
  }

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
        <ModalPopup
          testID="deletePop"
          isVisible={isDeletePop}
          content="Are you sure you want to delete the restaurant?"
          positiveBtnTxt="Delete"
          negativeBtnTxt="Cancel"
          onPositiveBtnPress={onDelete}
          onNegativeBtnPress={toggleModal}
        />
        <View style={styles.noReviewWrapper}>
          <Text style={styles.noReviewTxt}>No Reviews yet!!</Text>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <ModalPopup
        testID="deletePop"
        isVisible={isDeletePop}
        content="Are you sure you want to delete the restaurant? It will delete all the reviews associated with it too?"
        positiveBtnTxt="Delete"
        negativeBtnTxt="Cancel"
        onPositiveBtnPress={onDelete}
        onNegativeBtnPress={toggleModal}
      />
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
