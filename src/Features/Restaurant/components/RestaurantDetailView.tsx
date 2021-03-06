import React from 'react'
import { ImageBackground, ScrollView, Text, TouchableOpacityProps, View } from 'react-native'

import styles from '../styles/RestaurantDetails'
import ReviewBlock from '../../../components/ReviewBlock'
import RatingsOverview from './RatingsOverview'
import {
  RestaurantDetails_getRestaurant as RestaurantDetails,
  RestaurantDetails_getRestaurant_reviews as Reviews,
} from '../gql/__generated__/RestaurantDetails'
import EmptyRestaurantDetailView from './EmptyRestaurantDetailView'
import { UserType } from '../../../../__generated__/globalTypes'
import PlusIcon from '../../Home/owner/components/PlusIcon'

interface RestaurantDetailViewProps {
  restaurantData: RestaurantDetails
  userType: string | undefined
  onAddReview: TouchableOpacityProps['onPress']
  onSaveReply: (arg0: number, arg1: string) => void
}

interface ReviewWrapperProps {
  reviewHeader: string
  userType: string
  reviews: Array<Reviews>
  onSaveReply: (arg0: number, arg1: string) => void
}

interface ReviewsWithHeaderProps {
  userType: string
  reviews: Array<Reviews>
  title: string
  onSaveReply: (arg0: number, arg1: string) => void
}

const ReviewsHeader = ({ title }: any) => (
  <View style={styles.reviewBorder}>
    <Text style={styles.reviewTxt}>{title}</Text>
  </View>
)

const ReviewsWithHeader = ({ userType, title, reviews, onSaveReply }: ReviewsWithHeaderProps) => {
  return (
    <View>
      <ReviewsHeader title={title} />
      {reviews.map((review, index) => (
        <ReviewBlock
          shouldReply={userType === UserType.owner}
          key={index}
          reviewId={review.id}
          reviewerName={review.user.fullName}
          comments={review.comments}
          visitDate={review.visitDate}
          ratings={review.ratings}
          ownerReply={review.ownerReply ?? ''}
          onSend={onSaveReply}
        />
      ))}
    </View>
  )
}

const ReviewWrapper = ({
  reviewHeader = 'Latest Rated',
  reviews,
  userType,
  onSaveReply,
}: ReviewWrapperProps) => (
  <View style={styles.contentContainer} testID="contentContainer">
    <ReviewsWithHeader
      onSaveReply={onSaveReply}
      userType={userType}
      title={reviewHeader}
      reviews={reviews}
    />
  </View>
)

const RestaurantDetailView = ({
  restaurantData,
  userType,
  onAddReview,
  onSaveReply,
}: RestaurantDetailViewProps) => (
  <>
    <ScrollView scrollIndicatorInsets={{ right: 1 }}>
      <View style={styles.container} testID="detailsContainer">
        <ImageBackground
          style={styles.headerBg}
          source={{ uri: 'https://source.unsplash.com/user/picoftasty' }}
        >
          <Text style={styles.restaurantTitle}>{restaurantData.restaurantName}</Text>
          <RatingsOverview ratings={restaurantData.averageRatings} />
        </ImageBackground>

        {restaurantData.reviews?.length === 0 ? (
          <EmptyRestaurantDetailView />
        ) : (
          <>
            <ReviewWrapper
              reviewHeader="Latest Rated"
              onSaveReply={onSaveReply}
              userType={userType!}
              reviews={restaurantData.reviews ?? []}
            />
            <ReviewWrapper
              reviewHeader="Highest Rated"
              onSaveReply={onSaveReply}
              userType={userType!}
              reviews={restaurantData.highestRatedReviews ?? []}
            />
            <ReviewWrapper
              reviewHeader="Lowest Rated"
              onSaveReply={onSaveReply}
              userType={userType!}
              reviews={restaurantData.lowestRatedReviews ?? []}
            />
          </>
        )}
      </View>
    </ScrollView>
    {userType === UserType.customer ? (
      <PlusIcon testID="addReviewIc" onPress={onAddReview} />
    ) : null}
  </>
)

export default React.memo(RestaurantDetailView)
