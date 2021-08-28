import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Sentry from '@sentry/react-native'
import jwtDecode from 'jwt-decode'
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin'
import { AccessToken, LoginManager } from 'react-native-fbsdk-next'
import { Platform } from 'react-native'

export const configureGoogleSignIn = () => {
  console.log('--- configureGoogleSignIn ---')
  GoogleSignin.configure({
    scopes: ['email', 'profile'],
    webClientId:
      Platform.OS === 'ios'
        ? '608393754261-vhfk6c3gbi1641k4cupd2pfssfa74t52.apps.googleusercontent.com'
        : '608393754261-6d75grmneig39ucr20u7hbcd9f2uq2d5.apps.googleusercontent.com',
  })
}

export const googleSignIn = async () => {
  try {
    await GoogleSignin.hasPlayServices()
    const userInfo = await GoogleSignin.signIn()
    console.log('--- googleSignIn SUCCESS ---')
    return userInfo
  } catch (error) {
    console.log('--- googleSignIn ERROR ---', error)
    //Sentry.captureException(error);
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
    throw new Error(error)
  }
}

export const googleSignOut = async () => {
  const isSignedIn = await GoogleSignin.isSignedIn()
  if (isSignedIn) {
    try {
      configureGoogleSignIn()
      await GoogleSignin.revokeAccess()
      const userInfo = await GoogleSignin.signOut()
      return userInfo
    } catch (error) {
      //Sentry.captureException(error);
      console.log('---- @ ---- ')
      console.log(error)
    }
  }
}

export const fbSignIn = async () => {
  const result = await LoginManager.logInWithPermissions(['email'])
  console.log(result)
  //If the user cancels the sign in return with message
  if (result.isCancelled) return console.log('Login cancelled')

  //Else get the access token and return from function
  const data = await AccessToken.getCurrentAccessToken()
  return data?.accessToken.toString()
}

export const fbSignOut = async () => {
  try {
    const result = LoginManager.logOut()
    return result
  } catch (error) {
    //Sentry.captureException(error);
    console.log(error)
  }
}

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
    console.log('jsonValue')
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

export const decodeToken = (token: string) => {
  //decode the token to get the userInfo object
  const userInfo = jwtDecode(token)
  //save the token and userInfo obj in async storage
  storeData('userInfo', { userInfo, token })
  return userInfo
}
