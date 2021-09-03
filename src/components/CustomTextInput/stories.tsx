import React from 'react'
import { storiesOf } from '@storybook/react-native'
import CustomTextInput from './component'

storiesOf('Components', module).add('CustomTextInput', () => (
  <CustomTextInput
    testID="textInput"
    placeholderTxt="Email"
    onBlur={() => console.log('blurred')}
    onFocus={() => console.log('validate form')}
    onChangeText={() => console.log('text changes')}
    touched={{ key: false }}
    name={'textinput'}
    errors={{ key: 'errors' }}
  />
))
