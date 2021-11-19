import React from 'react'
import { View } from 'react-native'

import Button from '../../../../components/Button'
import Colors from '../../../../utilities/colors'
import styles from '../styles'

export interface ButtonWrapperProps {
  onSignIn: () => void
  onSignUp: () => void
}

const ButtonWrapper = ({ onSignIn, onSignUp }: ButtonWrapperProps) => (
  <View style={styles.buttonWrapper} testID="buttonWrapper">
    <Button
      testID="loginBtn"
      title={'Login'}
      textColor={Colors.black}
      buttonColor={Colors.lightGrey}
      customStyle={styles.leftBtn}
      onPress={onSignIn}
    />
    <Button
      testID="signupBtn"
      title={'Sign Up'}
      textColor={Colors.white}
      customStyle={styles.rightBtn}
      buttonColor={Colors.appOrange}
      onPress={onSignUp}
    />
  </View>
)

export default React.memo(ButtonWrapper)
