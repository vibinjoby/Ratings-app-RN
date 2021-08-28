import React from 'react'
import { storiesOf } from '@storybook/react-native'
import SocialMediaButton from './component'
import { StyleSheet } from 'react-native'

storiesOf('Components', module).add('SocialMediaButton', () => (
  <>
    <SocialMediaButton
      mediaText="Continue with Google"
      mediaType="google"
      onPress={() => console.log('pressed')}
      style={styles.btns}
    />
    <SocialMediaButton
      mediaText="Continue with facebook"
      mediaType="fb"
      onPress={() => console.log('pressed')}
      style={styles.btns}
    />
  </>
))

const styles = StyleSheet.create({
  btns: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
})
