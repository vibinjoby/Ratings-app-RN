import React from 'react'
import { storiesOf } from '@storybook/react-native'
import AppDatePicker from './component'

export const Story = () => <AppDatePicker />

storiesOf('Components', module).add('AppDatePicker', () => <Story />)

export default {
  title: 'AppDatePicker',
}
