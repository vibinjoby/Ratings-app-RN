import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Provider, useDispatch } from 'react-redux'

import AppLoader from './component'
import { store } from '../../store'
import Button from '../Button'
import { startLoader, stopLoader } from '../../store/reducers/common/loader'

const Component = () => {
  const dispatch = useDispatch()

  const onPress = () => {
    dispatch({ type: startLoader.type })

    setTimeout(() => {
      dispatch({ type: stopLoader.type })
    }, 2000)
  }

  return <Button title="click to show loader for 2 seconds" onPress={onPress} />
}

storiesOf('Components', module).add('AppLoader', () => (
  <NavigationContainer>
    <Provider store={store}>
      <AppLoader>
        <Component />
      </AppLoader>
    </Provider>
  </NavigationContainer>
))
