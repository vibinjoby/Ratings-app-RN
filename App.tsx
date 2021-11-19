import { NavigationContainer } from '@react-navigation/native'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { LogBox, View } from 'react-native'
import * as Sentry from '@sentry/react-native'

import RootStack from './src/navigations/RootStack'
import Storybook from './storybook'
import DevMenu from 'react-native-dev-menu'

const App: React.FC = () => {
  const [isStorybook, setIsStorybook] = useState(false)

  const toggleStorybook = () => {
    setIsStorybook((val) => !val)
  }

  useEffect(() => {
    if (__DEV__) {
      DevMenu.addItem('Toggle storybook', toggleStorybook)
      /** Development-mode  */
      LogBox.ignoreAllLogs() // Ignore all log warnings
      console.error = () => console.log() // Ignore all errors
    }
    // Sentry logging
    // Visit here to see all logs https://sentry.io/organizations/vibins-personal-projects/issues/?project=5935046
    Sentry.init({
      dsn: 'https://9c5521b6af684430a7c4b4cf8ef0a352@o971056.ingest.sentry.io/5935046',
      enableAutoSessionTracking: true,
      // Sessions close after app is 10 seconds in the background.
      sessionTrackingIntervalMillis: 10000,
      maxBreadcrumbs: 50,
      debug: true,
      enableNative: false,
    })
  }, [])

  return !isStorybook ? (
    <NavigationContainer>
      <View style={{ backgroundColor: 'black' }} />
    </NavigationContainer>
  ) : (
    <Storybook />
  )
}

export default App
