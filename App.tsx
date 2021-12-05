import React, { useState, useEffect } from 'react'
import { LogBox } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'
import * as Sentry from '@sentry/react-native'
import { ApolloProvider } from '@apollo/client'
import DevMenu from 'react-native-dev-menu'

import './config/ReactotronConfig'
//import Storybook from './storybook'
import { client } from './client'
import BaseModule from './src/BaseModule'
import { useNoInternet } from './src/utilities/SetupServices'
import AppNoInternet from './src/components/AppNoInternet'

const storybookKeyName = 'mobile-render-storybook'

const App: React.FC = () => {
  const [isStorybook, setIsStorybook] = useState(false)
  const { isConnected } = useNoInternet()

  const loadRenderStorybook = async () => {
    try {
      const value = await AsyncStorage.getItem(storybookKeyName)
      setIsStorybook(value === 'true')
    } catch (error) {
      console.warn(error)
    }
  }

  const toggleStorybook = async () => {
    setIsStorybook((_renderStorybook) => {
      AsyncStorage.setItem(storybookKeyName, String(_renderStorybook)).catch((e) => console.warn(e))
      return !_renderStorybook
    })
  }

  useEffect(() => {
    if (__DEV__) {
      DevMenu.addItem('Toggle storybook', toggleStorybook)
      /** Development-mode  */
      LogBox.ignoreAllLogs() // Ignore all log warnings
      //console.error = () => console.log() // Ignore all errors
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
    //loadRenderStorybook()
  }, [])

  if (isStorybook) return <></>

  return (
    <ApolloProvider client={client}>
      <AppNoInternet isConnected={isConnected} />
      <NavigationContainer>
        <BaseModule />
      </NavigationContainer>
    </ApolloProvider>
  )
}

export default App
