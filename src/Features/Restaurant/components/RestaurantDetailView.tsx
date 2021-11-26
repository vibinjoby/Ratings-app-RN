import React from 'react'
import { ImageBackground, ScrollView, Text, View } from 'react-native'

import styles from '../styles/RestaurantDetails'
import ReviewBlock from '../../../components/ReviewBlock'
import RatingsOverview from './RatingsOverview'

const ReviewsHeader = ({ title }: any) => (
  <View style={styles.reviewBorder}>
    <Text style={styles.reviewTxt}>{title}</Text>
  </View>
)

interface RestaurantDetailViewProps {
  restaurantData: any
}

const RestaurantDetailView = ({ restaurantData }: RestaurantDetailViewProps) => (
  <ScrollView scrollIndicatorInsets={{ right: 1 }}>
    <View style={styles.container} testID="detailsContainer">
      <ImageBackground
        style={styles.headerBg}
        source={{ uri: 'https://source.unsplash.com/user/picoftasty' }}
      >
        <Text style={styles.restaurantTitle}>{restaurantData.restaurant_name}</Text>
        <RatingsOverview />
      </ImageBackground>
      <View style={styles.contentContainer} testID="contentContainer">
        <ReviewsHeader title="Latest Rated" />
        {/* {latestReviews.slice(0, 3).map((item, index) => (
          <ReviewBlock
            key={index}
            reviewId={item?._id}
            reviewerName={item?.rated_user_id?.fullName}
            comments={item?.comments}
            visitDate={item?.visit_date}
            ratings={item?.ratings}
            owner_reply={item?.owner_reply}
          />
        ))}

        {lowestRatedReview && (
          <View style={styles.lowestWrapper}>
            <ReviewsHeader title="Lowest Rated" />
            <ReviewBlock
              reviewId={restaurantDetail.lowestRatedReview?._id}
              reviewerName={restaurantDetail.lowestRatedReview?.rated_user_id?.fullName}
              comments={restaurantDetail.lowestRatedReview?.comments}
              visitDate={restaurantDetail.lowestRatedReview?.visit_date}
              ratings={restaurantDetail.lowestRatedReview?.ratings}
              owner_reply={restaurantDetail.lowestRatedReview?.owner_reply}
            />
          </View>
        )}

        {highestRatedReview && (
          <View style={styles.lowestWrapper}>
            <ReviewsHeader title="Highest Rated" />
            <ReviewBlock
              reviewId={restaurantDetail.highestRatedReview?._id}
              reviewerName={restaurantDetail.highestRatedReview?.rated_user_id?.fullName}
              comments={restaurantDetail.highestRatedReview?.comments}
              visitDate={restaurantDetail.highestRatedReview?.visit_date}
              ratings={restaurantDetail.highestRatedReview?.ratings}
              owner_reply={restaurantDetail.highestRatedReview?.owner_reply}
            />
          </View>
        )} */}
      </View>
    </View>
  </ScrollView>
)

export default React.memo(RestaurantDetailView)
