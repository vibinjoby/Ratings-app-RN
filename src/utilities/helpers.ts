import AsyncStorage from '@react-native-community/async-storage'
import * as Sentry from '@sentry/react-native'
import jwtDecode from 'jwt-decode'
import userInfoVars, { UserInfoProps } from '../store'

export const storeData = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (e) {
    Sentry.captureException(e)
    console.log(e)
  }
}

export const getData = async (key: string): Promise<any> => {
  try {
    const jsonValue: any = await AsyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch (e) {
    Sentry.captureException(e)
    console.log(e)
  }
}

export const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (error) {
    Sentry.captureException(error)
    console.log(error)
  }
}

export const decodeAndSaveToken = (token: string, isAdmin?: boolean) => {
  //decode the token to get the userInfo object
  const userInfo = jwtDecode(token)
  if (isAdmin) {
    //@ts-ignore
    userInfo.typeOfUser = 'admin'
  }
  //save the token and userInfo obj in async storage
  storeData('userInfo', { userInfo, token })
  // Save the info to cache
  userInfoVars({ token, userInfo } as UserInfoProps)
  return { userInfo, token }
}
