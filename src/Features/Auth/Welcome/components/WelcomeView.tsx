import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'

import styles from '../styles'
import ButtonWrapper from './ButtonWrapper'
import SocialButtons from './SocialButtons'

export interface WelcomeViewProps {
  onSignIn: () => void
  onSignUp: () => void
  onGSignIn: () => void
  onFbSignIn: () => void
}

const WelcomeView = ({ onSignIn, onSignUp, onGSignIn, onFbSignIn }: WelcomeViewProps) => (
  <ScrollView>
    <View testID="welcomeContainer" style={styles.container}>
      <Image
        style={styles.headerImg}
        source={require('../../assets/welcomeDish/welcomeDish.png')}
      />
      <View testID="contentWrapper" style={styles.contentContainer}>
        <Text style={styles.titleTxt}>Find your favourite restaurant with clue</Text>
        <ButtonWrapper onSignIn={onSignIn} onSignUp={onSignUp} />
        <Text style={styles.connectTxt}>Or connect with socials as customer</Text>
        <SocialButtons onFbSignIn={onFbSignIn} onGSignIn={onGSignIn} />
      </View>
    </View>
  </ScrollView>
)

export default React.memo(WelcomeView)
