import React, { useState } from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import TextField from './component'
import { StyleSheet } from 'react-native'

const TextFieldComponent = () => {
  const [inputVal, setInputVal] = useState('')

  return (
    <View style={styles.container}>
      <TextField
        textHint="Email/Username"
        inputValue={inputVal}
        onInputChange={(e) => setInputVal(e)}
      />
      <TextField
        textHint="Password"
        isProtected
        inputValue={inputVal}
        onInputChange={(e) => setInputVal(e)}
      />
    </View>
  )
}

storiesOf('Components', module).add('TextField', () => <TextFieldComponent />)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
})
