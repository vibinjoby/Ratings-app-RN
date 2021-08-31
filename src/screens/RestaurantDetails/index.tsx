import React, { useEffect } from 'react'
import { ImageBackground, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

import commons from '../../configs/commonConst'
import { RootState } from '../../store'
import { getRestaurantDetail } from '../../store/reducers/restaurant'
import styles from './styles'
import routes from '../../navigations/routes'
import ReviewBlock from '../../components/ReviewBlock'

const RestaurantDetails: React.FC = () => {
  const route = useRoute<any>()
  const token = useSelector((state: RootState) => state.auth.token)
  const restaurantDetail = useSelector((state: RootState) => state.restaurants.restaurantDetails)
  const dispatch = useDispatch()
  const navigation = useNavigation()

  useEffect(() => {
    const id = route.params?.id
    dispatch(getRestaurantDetail(token, id))
  }, [])

  const ReviewsHeader = ({ title }: any) => (
    <View style={styles.reviewBorder}>
      <Text style={styles.reviewTxt}>{title}</Text>
    </View>
  )

  const PlusIc = () => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.plusIcContainer} //@ts-ignore
      onPress={() => navigation.navigate(routes.ADD_REVIEW)}
    >
      <Text style={styles.plusTxt}>+</Text>
    </TouchableOpacity>
  )

  const RatingOverview = () => (
    <View style={styles.ratingOverview}>
      <Image style={styles.starImg} source={require('../../assets/star/star.png')} />
      <Text style={styles.ratings}>{restaurantDetail.restaurantData.average_ratings}</Text>
    </View>
  )

  if (!restaurantDetail) return <></>

  if (restaurantDetail?.latestReviews.length === 0) {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.headerBg} source={{ uri: commons.DUMMY_PIC }}>
          <Text style={styles.restaurantTitle} numberOfLines={1} ellipsizeMode="tail">
            {/** @ts-ignore */}
            {restaurantDetail?.restaurantData.restaurant_name}
          </Text>
          <RatingOverview />
        </ImageBackground>
        <View style={styles.noReviewWrapper}>
          <Text style={styles.noReviewTxt}>No Reviews yet!!</Text>
        </View>
        <PlusIc />
      </View>
    )
  }

  return (
    <>
      <ScrollView scrollIndicatorInsets={{ right: 1 }}>
        <View style={styles.container}>
          <ImageBackground style={styles.headerBg} source={{ uri: commons.DUMMY_PIC }}>
            <Text style={styles.restaurantTitle}>
              {restaurantDetail?.restaurantData.restaurant_name}
            </Text>
            <RatingOverview />
          </ImageBackground>
          <View style={styles.contentContainer}>
            <ReviewsHeader title="Latest Rated" />
            {!restaurantDetail?.latestReviews && <Text>No reviews yet </Text>}
            {restaurantDetail?.latestReviews.slice(0, 3).map((item, index) => (
              <ReviewBlock
                key={index} //@ts-ignore
                reviewId={item?._id} //@ts-ignore
                reviewerName={item?.rated_user_id?.fullName} //@ts-ignore
                comments={item?.comments} //@ts-ignore
                visitDate={item?.visit_date} //@ts-ignore
                ratings={item?.ratings} //@ts-ignore
                owner_reply={item?.owner_reply}
              />
            ))}

            {restaurantDetail?.lowestRatedReview && (
              <View style={styles.lowestWrapper}>
                <ReviewsHeader title="Lowest Rated" />
                <ReviewBlock //@ts-ignore
                  reviewId={restaurantDetail.lowestRatedReview?._id}
                  reviewerName={restaurantDetail.lowestRatedReview?.rated_user_id?.fullName} //@ts-ignore
                  comments={restaurantDetail.lowestRatedReview?.comments} //@ts-ignore
                  visitDate={restaurantDetail.lowestRatedReview?.visit_date} //@ts-ignore
                  ratings={restaurantDetail.lowestRatedReview?.ratings} //@ts-ignore
                  owner_reply={restaurantDetail.lowestRatedReview?.owner_reply}
                />
              </View>
            )}

            {restaurantDetail?.highestRatedReview && (
              <View style={styles.lowestWrapper}>
                <ReviewsHeader title="Highest Rated" />
                <ReviewBlock //@ts-ignore
                  reviewId={restaurantDetail.highestRatedReview?._id}
                  reviewerName={restaurantDetail.highestRatedReview?.rated_user_id?.fullName} //@ts-ignore
                  comments={restaurantDetail.highestRatedReview?.comments} //@ts-ignore
                  visitDate={restaurantDetail.highestRatedReview?.visit_date} //@ts-ignore
                  ratings={restaurantDetail.highestRatedReview?.ratings} //@ts-ignore
                  owner_reply={restaurantDetail.highestRatedReview?.owner_reply}
                />
              </View>
            )}
          </View>
        </View>
      </ScrollView>
      {/** A Customer can rate a restaurant only once */}
      {!restaurantDetail?.hasUserRated ? <PlusIc /> : <></>}
    </>
  )
}

export default RestaurantDetails
