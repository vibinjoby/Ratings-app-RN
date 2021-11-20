import React from 'react'
import { Text, View } from 'react-native'

import ModalPopup from '../../../../components/ModalPopup'
import { HomeViewProps } from '../../types'
import styles from '../styles'
import PlusIcon from './PlusIcon'

const EmptyRestaurants = ({
  isLogoutPopupVisible,
  onLogout,
  onNegativeModalPress,
}: HomeViewProps) => (
  <View style={styles.noReviewWrapper}>
    <ModalPopup
      isVisible={isLogoutPopupVisible}
      content="Are you sure you want to logout?"
      positiveBtnTxt="Logout"
      negativeBtnTxt="Cancel"
      onPositiveBtnPress={onLogout}
      onNegativeBtnPress={onNegativeModalPress}
    />
    <Text style={styles.noReviewTxt}>No Restaurants added yet!!</Text>
    <PlusIcon onPress={() => {}} />
  </View>
)

export default React.memo(EmptyRestaurants)
