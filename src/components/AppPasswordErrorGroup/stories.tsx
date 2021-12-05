import React from 'react'
import { storiesOf } from '@storybook/react-native'
import AppPasswordErrorGroup from './component'

export const Story = () => <AppPasswordErrorGroup inputValue="12345" />

storiesOf('Components', module).add('AppPasswordErrorGroup', () => <Story />)

export default {
  title: 'AppPasswordErrorGroup',
}
