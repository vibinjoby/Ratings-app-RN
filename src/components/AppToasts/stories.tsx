import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Provider, useDispatch } from 'react-redux'

import AppToasts from './component'
import { store } from '../../store'
import Button from '../Button'
import { errorToast, successToast } from '../../store/reducers/common/toaster'
import { StyleSheet } from 'react-native'

const Component = () => {
  const dispatch = useDispatch()

  const onPressErrorToast = () => {
    dispatch({
      type: errorToast.type,
      payload: { message: 'This is a error message' },
    })
  }

  const onPressSuccessToast = () => {
    dispatch({
      type: successToast.type,
      payload: { message: 'This is a success message' },
    })
  }

  return (
    <>
      <Button
        title="click to show Success toast"
        onPress={onPressSuccessToast}
        customStyle={styles.buttons}
      />
      <Button
        title="click to show Error toast"
        onPress={onPressErrorToast}
        customStyle={styles.buttons}
      />
    </>
  )
}

storiesOf('Components', module).add('AppToasts', () => (
  <NavigationContainer>
    <Provider store={store}>
      <AppToasts>
        <Component />
      </AppToasts>
    </Provider>
  </NavigationContainer>
))

const styles = StyleSheet.create({
  buttons: {
    margin: 20,
  },
})
