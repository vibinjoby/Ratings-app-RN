import React, { useState } from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import AppTextInput from './component'
import { StyleSheet } from 'react-native'

export const AppTextInputComponent = () => {
  const [inputVal, setInputVal] = useState('')

  return (
    <View style={styles.container}>
      <AppTextInput
        textHint="Email/Username"
        inputValue={inputVal}
        onInputChange={(e) => setInputVal(e)}
      />
      <AppTextInput
        textHint="Password"
        isProtected
        inputValue={inputVal}
        onInputChange={(e) => setInputVal(e)}
      />
    </View>
  )
}

storiesOf('Components', module).add('AppTextInput', () => <AppTextInputComponent />)

export default {
  title: 'AppTextInput',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
})
