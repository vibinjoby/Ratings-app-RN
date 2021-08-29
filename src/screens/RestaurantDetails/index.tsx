import React, { useEffect } from 'react'
import { ImageBackground, View, Text, Image, TouchableOpacity } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

import commons from '../../configs/commonConst'
import Stars from '../../components/Stars'
import { RootState } from '../../store'
import { getRestaurantDetail } from '../../store/reducers/restaurant'
import Colors from '../../utilities/colors'
import styles from './styles'
import { ScrollView } from 'react-native-gesture-handler'
import moment from 'moment'

type Review = {
  reviewId?: string
  reviewerName: string
  comments: string
  ratings: number
  visitDate: string /* eslint-disable camelcase */
  owner_reply?: string
}

const RestaurantDetails: React.FC = () => {
  const route = useRoute<any>()
  const token = useSelector((state: RootState) => state.auth.token)
  const restaurantDetail = useSelector((state: RootState) => state.restaurants.restaurantDetails)
  const dispatch = useDispatch()

  useEffect(() => {
    const id = route.params?.id
    dispatch(getRestaurantDetail(token, id))
  }, [])

  const ReviewsHeader = ({ title }: any) => (
    <View style={styles.reviewBorder}>
      <Text style={styles.reviewTxt}>{title}</Text>
    </View>
  )
  /* eslint-disable camelcase */
  const OwnerReply = ({ owner_reply }: any) => (
    <View style={styles.ownerWrapper}>
      <View style={styles.ownerTitleWrapper}>
        <Image source={require('../../assets/guest-pic.png')} style={styles.ownerPic} />
        <Text style={styles.ownerTitle}>Business Owner</Text>
      </View>
      {/* eslint-disable camelcase */}
      <Text>{owner_reply}</Text>
    </View>
  )
  /* eslint-disable camelcase */
  const ReviewBlock = ({ reviewerName, comments, ratings, visitDate, owner_reply }: Review) => (
    <View style={styles.reviewContainer}>
      <Image source={require('../../assets/dummyUser/dummyUser.png')} />
      <View style={styles.reviewWrapper}>
        <Text style={styles.reviewerName}>{reviewerName?.toUpperCase()}</Text>
        <View style={styles.ratingWrapper}>
          <Stars
            selectedStars={ratings}
            selectable={false}
            starHeight={14}
            selectedColor={Colors.appOrange}
          />
          <Text style={styles.visitDt}>{moment(visitDate).format('DD/MM/yyyy')}</Text>
        </View>
        <Text style={styles.comments}>{comments}</Text>
        {/* eslint-disable camelcase */}
        {owner_reply ? <OwnerReply owner_reply={owner_reply} /> : <></>}
      </View>
    </View>
  )

  const PlusIc = () => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.plusIcContainer}
      onPress={() => console.log('plsu')}
    >
      <Text style={styles.plusTxt}>+</Text>
    </TouchableOpacity>
  )

  if (!restaurantDetail) return <></>

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground style={styles.headerBg} source={{ uri: commons.DUMMY_PIC }}>
            <Text style={styles.restaurantTitle}>
              {restaurantDetail?.restaurantData.restaurant_name}
            </Text>
          </ImageBackground>
          <View style={styles.contentContainer}>
            <ReviewsHeader title="Latest" />
            {restaurantDetail?.latestReviews.map((item, index) => (
              <ReviewBlock
                key={index} //@ts-ignore
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
