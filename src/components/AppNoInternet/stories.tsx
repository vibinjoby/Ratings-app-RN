import React from 'react'
import { storiesOf } from '@storybook/react-native'
import AppNoInternet from './component'

export const Story = () => <AppNoInternet isConnected={false} />

storiesOf('Components', module).add('AppNoInternet', () => <Story />)

export default {
  title: 'AppNoInternet',
}
