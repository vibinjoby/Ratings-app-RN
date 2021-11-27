import React from 'react'
import { StyleSheet } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import AppToasts from './component'

storiesOf('Components', module).add('AppToasts', () => (
  <AppToasts isError={false} toastMessage="Hey this is a toast" />
))

const styles = StyleSheet.create({
  buttons: {
    margin: 20,
  },
})
