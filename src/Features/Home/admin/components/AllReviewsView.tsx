import React, { useState } from 'react'
import { FlatList, View } from 'react-native'

import ModalPopup from '../../../../components/ModalPopup'
import ReviewBlock from '../../../../components/ReviewBlock'
import { UpdateReviewInput } from '../../../../../__generated__/globalTypes'
import { ReviewsList_findReviewsByRestaurantId as Reviews } from '../../gql/__generated__/ReviewsList'
import styles from '../styles/AllReviews'

export interface AllReviewsViewProps {
  reviews: Reviews[]
  onDelete: (reviewId: number) => void
  onEditSave: (updateInput: UpdateReviewInput) => void
}

const AllReviewsView = ({ reviews, onDelete, onEditSave }: AllReviewsViewProps) => {
  const [isDeletePop, setIsDeletePop] = useState(false)
  const [selectedReviewId, setSelectedReviewId] = useState(-1)
  const toggleModal = () => setIsDeletePop((val) => !val)

  const onSelectedOption = (index: number, reviewId: number) => {
    if (index === 0) {
      toggleModal()
      setSelectedReviewId(reviewId)
    }
  }

  return (
    <View style={styles.container}>
      <ModalPopup
        testID="deletePop"
        isVisible={isDeletePop}
        content="Are you sure you want to delete the review?"
        positiveBtnTxt="Delete"
        negativeBtnTxt="Cancel"
        onPositiveBtnPress={() => onDelete(selectedReviewId)}
        onNegativeBtnPress={toggleModal}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <ReviewBlock
            reviewId={item.id}
            reviewerName={item.user.fullName}
            comments={item.comments}
            visitDate={item.visitDate}
            ratings={item.ratings}
            ownerReply={item.ownerReply!}
            showThreeDots
            onOptionPress={(index) => onSelectedOption(index, item.id)}
            isEditResponse
            onEditSave={onEditSave}
          />
        )}
      />
    </View>
  )
}

export default React.memo(AllReviewsView)
