import React, { useEffect } from 'react'
import { Image, View, Text, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import * as Sentry from '@sentry/react-native'

import Button from '../../components/Button'
import Colors from '../../utilities/colors'
import styles from './styles'
import { configureGoogleSignIn, fbSignIn, googleSignIn } from '../../utilities/helpers'
import SocialMediaButton from '../../components/SocialMediaButton'
import routes from '../../navigations/routes'
import { socialLoginUser } from '../../store/reducers/auth'
import { RootState } from '../../store'

const Welcome: React.FC = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const token = useSelector((state: RootState) => state.auth.token)
  const userType = useSelector((state: RootState) => state.auth.userInfo.typeOfUser)

  useEffect(() => {
    configureGoogleSignIn()
  }, [])

  useEffect(() => {
    if (!token) return
    if (userType === 'customer') {
      //@ts-ignore
      navigation.navigate(routes.CUSTOMER_HOME_STACK)
    } else if (userType === 'owner') {
      //@ts-ignore
      navigation.navigate(routes.OWNER_HOME_STACK)
    }
  }, [token])

  const handleGoogleSignIn = async () => {
    try {
      const { idToken } = await googleSignIn()
      if (!idToken) return
      dispatch(socialLoginUser(idToken, 'google', 'customer'))
    } catch (error) {
      console.log('---- GOOGLE SIGN IN ERROR ----')
      console.log(error)
      Sentry.captureException(error)
    }
  }

  const handleFBSignIn = async () => {
    try {
      const accessToken = await fbSignIn()
      if (!accessToken) return
      dispatch(socialLoginUser(accessToken, 'fb', 'customer'))
    } catch (error) {
      console.log(error)
      Sentry.captureException(error)
      //setLoading(false);
      //elpers.handleErrors(error, toastCtx);
    }
  }

  const ButtonWrapper = () => (
    <View style={styles.buttonWrapper} testID="buttonWrapper">
      <Button
        testID="loginBtn"
        title={'Login'}
        textColor={Colors.black}
        buttonColor={Colors.lightGrey}
        customStyle={styles.leftBtn}
        // @ts-ignore
        onPress={() => navigation.navigate(routes.LOGIN)}
      />
      <Button
        testID="signupBtn"
        title={'Sign Up'}
        textColor={Colors.white}
        customStyle={styles.rightBtn}
        buttonColor={Colors.appOrange}
        // @ts-ignore
        onPress={() => navigation.navigate(routes.SIGNUP)}
      />
    </View>
  )

  const SocialButtons = () => (
    <View>
      <SocialMediaButton
        testID="gBtn"
        mediaText="Continue with Google"
        mediaType="google"
        onPress={handleGoogleSignIn}
        style={styles.gBtn}
      />
      <SocialMediaButton
        testID="fbBtn"
        mediaText="Continue with Facebook"
        mediaType="fb"
        onPress={handleFBSignIn}
      />
    </View>
  )
  return (
    <ScrollView>
      <View testID="welcomeContainer" style={styles.container}>
        <Image
          style={styles.headerImg}
          source={require('../../assets/welcomeDish/welcomeDish.png')}
        />
        <View testID="contentWrapper" style={styles.contentContainer}>
          <Text style={styles.titleTxt}>Find your favourite restaurant with clue</Text>
          <ButtonWrapper />
          <Text style={styles.connectTxt}>Or connect with socials as customer</Text>
          <SocialButtons />
        </View>
      </View>
    </ScrollView>
  )
}

export default Welcome
