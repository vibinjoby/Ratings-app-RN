import React from 'react'
import { storiesOf } from '@storybook/react-native'

import AppToasts from './component'

export const Story = () => <AppToasts isError={false} toastMessage="Hey this is a toast" />

storiesOf('Components', module).add('AppToasts', () => <Story />)

export default {
  title: 'AppToasts',
}
