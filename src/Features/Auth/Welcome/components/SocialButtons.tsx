import React from 'react'
import { View } from 'react-native'

import SocialMediaButton from '../../../../components/SocialMediaButton'
import styles from '../styles'

export interface SocialButtonsProps {
  onGSignIn: () => void
  onFbSignIn: () => void
}

const SocialButtons = ({ onFbSignIn, onGSignIn }: SocialButtonsProps) => (
  <View>
    <SocialMediaButton
      testID="gBtn"
      mediaText="Continue with Google"
      mediaType="google"
      onPress={onGSignIn}
      style={styles.gBtn}
    />
    <SocialMediaButton
      testID="fbBtn"
      mediaText="Continue with Facebook"
      mediaType="fb"
      onPress={onFbSignIn}
    />
  </View>
)

export default React.memo(SocialButtons)
