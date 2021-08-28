import { NavigationContainer } from '@react-navigation/native'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { LogBox } from 'react-native'
import * as Sentry from '@sentry/react-native'
import { Provider } from 'react-redux'

import RootStack from './src/navigations/RootStack'
import { store } from './src/store'
//import Storybook from './storybook';

const App: React.FC = () => {
  // Enable this for development
  const [isStorybook] = useState(false)

  useEffect(() => {
    // Sentry logging
    Sentry.init({
      dsn: 'https://9c5521b6af684430a7c4b4cf8ef0a352@o971056.ingest.sentry.io/5935046',
      enableAutoSessionTracking: true,
      // Sessions close after app is 10 seconds in the background.
      sessionTrackingIntervalMillis: 10000,
      maxBreadcrumbs: 50,
      debug: true,
      enableNative: false,
    })
    /** Development-mode  */
    LogBox.ignoreAllLogs() // Ignore all log warnings
    // console.error = () => {} // Ignore all errors
  }, [])

  {
    /* <AppNoInternet>
<AppLoader>
  <AppToasts> */
  }
  return !isStorybook ? (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>
  ) : (
    <></>
  )
}

export default App
