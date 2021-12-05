import React from 'react'
import { storiesOf } from '@storybook/react-native'

import AppLoader from './component'

export const Story = () => <AppLoader />

storiesOf('Components', module).add('AppLoader', () => <Story />)

export default {
  title: 'AppLoader',
}
