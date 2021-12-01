import React from 'react'
import { storiesOf } from '@storybook/react-native'

import AppLoader from './component'
import Button from '../Button'

const Component = () => {
  const onPress = () => {}

  return <Button title="click to show loader for 2 seconds" onPress={onPress} />
}

storiesOf('Components', module).add('AppLoader', () => <AppLoader />)
