import React from 'react'
import { storiesOf } from '@storybook/react-native'
import PasswordErrorText from './component'

storiesOf('Components', module).add('PasswordErrorGroup', () => (
  <PasswordErrorText inputValue="12345" />
))
