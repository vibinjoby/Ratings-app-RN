import React from 'react'
import { storiesOf } from '@storybook/react-native'

import AppToasts from './component'

storiesOf('Components', module).add('AppToasts', () => (
  <AppToasts isError={false} toastMessage="Hey this is a toast" />
))
