import React from 'react'
import { storiesOf } from '@storybook/react-native'
import PasswordErrorText from './component'

storiesOf('Components', module).add('PasswordErrorText', () => (
  <PasswordErrorText inputValue="12345" />
))
