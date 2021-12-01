import * as React from 'react'
import { Platform } from 'react-native'
import { getStorybookUI, configure } from '@storybook/react-native'

// import stories
configure(() => {
  require('./stories')
}, module)

const StorybookUIRoot = getStorybookUI({
  host: Platform.OS === 'android' ? '10.0.2.2' : '0.0.0.0',
  onDeviceUI: true,
  asyncStorage: require('@react-native-community/async-storage').default,
})

class StorybookUIHMRRoot extends React.Component {
  render() {
    return <StorybookUIRoot />
  }
}

export default StorybookUIHMRRoot
