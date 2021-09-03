import React, { useState } from 'react'
import { Text, View, Image } from 'react-native'

import Colors from '../../utilities/colors'
import EditResponse from '../EditResponse'
import OwnerReply from '../OwnerReply'
import ReplyReview from '../ReplyReview'
import Stars from '../Stars'
import ThreeVerticalDots from '../ThreeVerticalDots'
import styles from './styles'

export interface ReviewBlockProps {
  reviewId: string
  reviewerName: string
  comments: string
  ratings: number
  visitDate: string /* eslint-disable camelcase */
  owner_reply?: string
  shouldReply?: boolean
  isEditResponse?: boolean
  onSend?: (arg0: string, arg1: string) => void
  showThreeDots?: boolean
  onOptionPress?: (arg0: number) => void
  onEditSave?: (arg0: string, arg1?: string, arg2?: string, arg3?: number) => void
}

const ReviewBlock: React.FC<ReviewBlockProps> = ({
  reviewId,
  reviewerName,
  comments,
  ratings,
  visitDate,
  owner_reply,
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

  const onReply = (reviewId: string, replyComments: string) => {
    setIsReplyPressed(false)
    onSend && onSend(reviewId, replyComments)
  }

  const toggleEditPopup = () => {
    setShowEditPop((val) => !val)
  }

  const onSave = (customerResponse?: string, ownerResponse?: string, stars?: number) => {
    toggleEditPopup()
    onEditSave && onEditSave(reviewId, customerResponse, ownerResponse, stars)
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
              {visitDate.substr(0, 13)}
            </Text>
          </View>
          <Text testID="comments" style={styles.comments}>
            {comments}
          </Text>
          {isReplyPressed && <ReplyReview _id={reviewId} onSend={onReply} />}
          {shouldReply && !owner_reply && !isReplyPressed && <ReplyButton />}
          {/* eslint-disable camelcase */}
          {owner_reply ? <OwnerReply owner_reply={owner_reply} /> : <></>}
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
          ownerResp={owner_reply}
          ratings={ratings}
          onDismiss={toggleEditPopup}
          onEdit={onSave}
        />
      )}
    </>
  )
}

export default ReviewBlock
