import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import * as Sentry from '@sentry/react-native'

import WelcomeView from '../components/WelcomeView'
import { configureGoogleSignIn, fbSignIn, googleSignIn } from '../../../../utilities/helpers'
import { ScreenNames } from '../../constants'

const Welcome: React.FC = () => {
  const navigation = useNavigation()
  /*   const dispatch = useDispatch()
  const token = useSelector((state: RootState) => state.auth.token)
  const userType = useSelector((state: RootState) => state.auth.userInfo.typeOfUser) */

  useEffect(() => {
    configureGoogleSignIn()
  }, [])

  /*   useEffect(() => {
    if (!token) return
    if (userType === 'customer') {
      //@ts-ignore
      navigation.navigate(routes.CUSTOMER_HOME_STACK)
    } else if (userType === 'owner') {
      //@ts-ignore
      navigation.navigate(routes.OWNER_HOME_STACK)
    }
  }, [token]) */

  const handleGoogleSignIn = async () => {
    try {
      const { idToken } = await googleSignIn()
      if (!idToken) return
      //dispatch(socialLoginUser(idToken, 'google', 'customer'))
    } catch (error) {
      Sentry.captureException(error)
    }
  }

  const handleFBSignIn = async () => {
    try {
      const accessToken = await fbSignIn()
      if (!accessToken) return
      //dispatch(socialLoginUser(accessToken, 'fb', 'customer'))
    } catch (error) {
      console.log(error)
      Sentry.captureException(error)
      //setLoading(false);
      //elpers.handleErrors(error, toastCtx);
    }
  }

  const handleSignIn = () => navigation.navigate({ key: ScreenNames.LOGIN })

  const handleSignUp = () => navigation.navigate({ key: ScreenNames.SIGNUP })

  return (
    <WelcomeView
      onSignIn={handleSignIn}
      onSignUp={handleSignUp}
      onGSignIn={handleGoogleSignIn}
      onFbSignIn={handleFBSignIn}
    />
  )
}

export default Welcome
