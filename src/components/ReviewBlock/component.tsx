import moment from 'moment'
import React, { useState } from 'react'
import { Text, View, Image } from 'react-native'

import Colors from '../../utilities/colors'
import OwnerReply from '../OwnerReply'
import ReplyReview from '../ReplyReview'
import Stars from '../AppStars'
import ThreeVerticalDots from '../ThreeVerticalDots'
import { UpdateReviewInput } from '../../../__generated__/globalTypes'
import styles from './styles'
import EditResponse from '../../Features/Home/admin/components/EditResponse'

export interface ReviewBlockProps {
  reviewId: number
  reviewerName: string
  comments: string
  ratings: number
  visitDate: string
  ownerReply?: string
  shouldReply?: boolean
  isEditResponse?: boolean
  onSend?: (arg0: number, arg1: string) => void
  showThreeDots?: boolean
  onOptionPress?: (arg0: number) => void
  onEditSave?: (updateInput: UpdateReviewInput) => void
}

const ReviewBlock: React.FC<ReviewBlockProps> = ({
  reviewId,
  reviewerName,
  comments,
  ratings,
  visitDate,
  ownerReply,
  shouldReply,
  onSend,
  showThreeDots,
  onOptionPress,
  isEditResponse,
  onEditSave,
}: ReviewBlockProps) => {
  const [showEditPop, setShowEditPop] = useState(false)
  const [isReplyPressed, setIsReplyPressed] = useState(false)

  const ReplyButton = () => (
    <Text testID="replyBtn" style={styles.replyText} onPress={() => setIsReplyPressed(true)}>
      Reply
    </Text>
  )

  const onReply = (replyComments: string, reviewId: number) => {
    setIsReplyPressed(false)
    onSend && onSend(reviewId, replyComments)
  }

  const toggleEditPopup = () => {
    setShowEditPop((val) => !val)
  }

  const onSave = (comments: string, ownerReply: string, ratings: number) => {
    toggleEditPopup()
    onEditSave &&
      onEditSave({
        id: reviewId,
        visitDate,
        comments,
        ownerReply,
        ratings,
      })
  }

  const onOptionSelected = (arg0: number) => {
    onOptionPress && onOptionPress(arg0)
    if (arg0 === 1) {
      toggleEditPopup()
    }
  }

  return (
    <>
      <View style={styles.reviewContainer}>
        <Image source={require('../../assets/dummyUser/dummyUser.png')} />
        <View style={styles.reviewWrapper}>
          <Text testID="reviewerName" style={styles.reviewerName}>
            {reviewerName?.toUpperCase()}
          </Text>
          <View style={styles.ratingWrapper}>
            <Stars
              testID="stars"
              selectedStars={ratings}
              selectable={false}
              starHeight={14}
              selectedColor={Colors.appOrange}
            />
            <Text testID="visitDt" style={styles.visitDt}>
              {moment(visitDate).format('Do MMM,YYYY')}
            </Text>
          </View>
          <Text testID="comments" style={styles.comments}>
            {comments}
          </Text>
          {isReplyPressed && <ReplyReview _id={reviewId} onSend={onReply} />}
          {shouldReply && !ownerReply && !isReplyPressed && <ReplyButton />}

          {ownerReply ? <OwnerReply ownerReply={ownerReply} /> : <></>}
        </View>
        {showThreeDots && (
          <ThreeVerticalDots
            testID="threeDots"
            onOptionPress={onOptionSelected}
            displayDatas={['Delete Review', 'Edit Response']}
          />
        )}
      </View>

      {isEditResponse && (
        <EditResponse
          isVisible={showEditPop}
          customerResp={comments}
          ownerResp={ownerReply}
          ratings={ratings}
          onDismiss={toggleEditPopup}
          onEdit={onSave}
        />
      )}
    </>
  )
}

export default ReviewBlock
