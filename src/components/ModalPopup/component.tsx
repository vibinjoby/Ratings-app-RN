import React from 'react'
import { View, Text } from 'react-native'
import Modal from 'react-native-modal'

import Colors from '../../utilities/colors'
import Button from '../Button'
import styles from './styles'

export interface ModalPopupProps {
  testID?: string
  isVisible: boolean
  content: string
  positiveBtnTxt: string
  negativeBtnTxt: string
  onPositiveBtnPress: () => void
  onNegativeBtnPress: () => void
}

const ModalPopup: React.FC<ModalPopupProps> = ({
  testID,
  isVisible,
  content,
  positiveBtnTxt,
  negativeBtnTxt,
  onPositiveBtnPress,
  onNegativeBtnPress,
}: ModalPopupProps) => {
  return (
    <Modal
      testID={testID}
      isVisible={isVisible}
      onBackdropPress={onNegativeBtnPress}
      backdropOpacity={0.5}
      hasBackdrop
    >
      <View style={styles.content} testID="container">
        <Text style={styles.contentTxt}>{content}</Text>
        <View style={styles.btnWrapper} testID="btnWrapper">
          <Button
            title={negativeBtnTxt}
            onPress={onNegativeBtnPress}
            customStyle={styles.cancelBtn}
            textColor={Colors.black}
            testID="negativeBtn"
          />
          <Button
            testID="positiveBtn"
            title={positiveBtnTxt}
            onPress={onPositiveBtnPress}
            customStyle={styles.yesBtn}
          />
        </View>
      </View>
    </Modal>
  )
}

export default ModalPopup
