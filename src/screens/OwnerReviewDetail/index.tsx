import { useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { View, Image, ImageBackground, Text } from 'react-native' //@ts-ignore
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { useDispatch, useSelector } from 'react-redux'

import ReviewBlock from '../../components/ReviewBlock'
import commons from '../../configs/commonConst'
import { RootState } from '../../store'
import { addReply, getOwnerRestaurantDetails } from '../../store/reducers/owner'
import styles from './styles'

const OwnerReviewDetail: React.FC = () => {
  const dispatch = useDispatch()
  const route = useRoute<any>()
  const token = useSelector((state: RootState) => state.auth.token)
  const ownerRestaurantDetail = useSelector((state: RootState) => state.owner.restaurantDetails)

  useEffect(() => {
    const id = route.params?.id
    dispatch(getOwnerRestaurantDetails(token, id))
  }, [])

  const RatingOverview = () => (
    <View style={styles.ratingOverview}>
      <Image style={styles.starImg} source={require('../../assets/star/star.png')} />
      {/** @ts-ignore */}
      <Text style={styles.ratings}>{ownerRestaurantDetail.restaurantData.average_ratings}</Text>
    </View>
  )

  const ReviewsHeader = ({ title }: any) => (
    <View style={styles.reviewBorder}>
      <Text style={styles.reviewTxt}>{title}</Text>
    </View>
  )

  if (ownerRestaurantDetail?.reviews.length === 0) {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.headerBg} source={{ uri: commons.DUMMY_PIC }}>
          <Text style={styles.restaurantTitle} numberOfLines={1} ellipsizeMode="tail">
            {/** @ts-ignore */}
            {ownerRestaurantDetail?.restaurantData.restaurant_name}
          </Text>
          <RatingOverview />
        </ImageBackground>
        <View style={styles.noReviewWrapper}>
          <Text style={styles.noReviewTxt}>No Reviews yet!!</Text>
        </View>
      </View>
    )
  }

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      scrollIndicatorInsets={{ right: 1 }}
      disableScrollViewPanResponder
    >
      <ImageBackground style={styles.headerBg} source={{ uri: commons.DUMMY_PIC }}>
        <Text style={styles.restaurantTitle}>
          {/** @ts-ignore */}
          {ownerRestaurantDetail?.restaurantData.restaurant_name}
        </Text>
        <RatingOverview />
      </ImageBackground>
      <View style={styles.contentContainer}>
        <ReviewsHeader title="Reviews" />

        {/** @ts-ignore */}
        {ownerRestaurantDetail?.reviews.slice(0, 3).map((item, index) => (
          <ReviewBlock
            key={index} //@ts-ignore
            reviewId={item?._id} //@ts-ignore
            reviewerName={item?.rated_user_id?.fullName} //@ts-ignore
            comments={item?.comments} //@ts-ignore
            visitDate={item?.visit_date} //@ts-ignore
            ratings={item?.ratings} //@ts-ignore
            owner_reply={item?.owner_reply}
            shouldReply
            onSend={(reply, id) => reply && dispatch(addReply(token, reply, id))}
          />
        ))}
      </View>
    </KeyboardAwareScrollView>
  )
}

export default OwnerReviewDetail
