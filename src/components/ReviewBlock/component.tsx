import React from 'react'
import { useState } from 'react'
import { Text, View, Image } from 'react-native'

import Colors from '../../utilities/colors'
import OwnerReply from '../OwnerReply'
import ReplyReview from '../ReplyReview'
import Stars from '../Stars'
import styles from './styles'

export interface ReviewBlockProps {
  reviewId: string
  reviewerName: string
  comments: string
  ratings: number
  visitDate: string /* eslint-disable camelcase */
  owner_reply?: string
  shouldReply?: boolean
  onSend?: (arg0: string, arg1: string) => void
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
}: ReviewBlockProps) => {
  const [isReplyPressed, setIsReplyPressed] = useState(false)
  const ReplyButton = () => (
    <Text style={styles.replyText} onPress={() => setIsReplyPressed(true)}>
      Reply
    </Text>
  )

  const onReply = (reviewId: string, replyComments: string) => {
    setIsReplyPressed(false)
    onSend && onSend(reviewId, replyComments)
  }
  return (
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
          <Text style={styles.visitDt}>{visitDate.substr(0, 13)}</Text>
        </View>
        <Text style={styles.comments}>{comments}</Text>
        {isReplyPressed && <ReplyReview _id={reviewId} onSend={onReply} />}
        {shouldReply && !owner_reply && !isReplyPressed && <ReplyButton />}
        {/* eslint-disable camelcase */}
        {owner_reply ? <OwnerReply owner_reply={owner_reply} /> : <></>}
      </View>
    </View>
  )
}

export default ReviewBlock
