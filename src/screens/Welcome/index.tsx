import React, { useEffect } from 'react'
import { Image, View, Text, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Button from '../../components/Button'
import Colors from '../../utilities/colors'
import styles from './styles'
import { configureGoogleSignIn, fbSignIn, googleSignIn } from '../../utilities/helpers'
import SocialMediaButton from '../../components/SocialMediaButton'
import routes from '../../navigations/routes'

export interface WelcomeProps {}

const Welcome: React.FC<WelcomeProps> = () => {
  const navigation = useNavigation()
  useEffect(() => {
    configureGoogleSignIn()
  }, [])
  const handleGoogleSignIn = async () => {
    try {
      const { idToken } = await googleSignIn()
      // Call the backend api to get the token bearer and handle for the user
      /* const {token, code} = await service.socialsAuthentication(
        idToken,
        'google',
      );
      dispatch(onAuth(navigation, token, code)); */
    } catch (error) {
      console.log('---- GOOGLE SIGN IN ERROR ----')
      console.log(error)
      console.log(error.toString())
      //Sentry.captureException(error);
    }
  }
  const handleFBSignIn = async () => {
    try {
      const accessToken = await fbSignIn()
      console.log(accessToken)
      // Call the backend api to get the token bearer and handle for the user
      /* const {token, code} = await service.socialsAuthentication(
        accessToken,
        'fb',
      ); */
      //dispatch(onAuth(navigation, token, code));
    } catch (error) {
      //Sentry.captureException(error);
      //setLoading(false);
      //elpers.handleErrors(error, toastCtx);
    }
  }
  const ButtonWrapper = () => (
    <View style={styles.buttonWrapper}>
      <Button
        title={'Login'}
        textColor={Colors.black}
        buttonColor={Colors.lightGrey}
        customStyle={styles.leftBtn}
        // @ts-ignore
        onPress={() => navigation.navigate(routes.LOGIN)}
      />
      <Button
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
        mediaText="Continue with Google"
        mediaType="google"
        onPress={handleGoogleSignIn}
        style={styles.gBtn}
      />
      <SocialMediaButton
        mediaText="Continue with Facebook"
        mediaType="fb"
        onPress={handleFBSignIn}
        style={styles.gBtn}
      />
    </View>
  )
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.headerImg}
          source={require('../../assets/welcomeDish/welcomeDish.png')}
        />
        <View style={styles.contentContainer}>
          <Text style={styles.titleTxt}>Find your favourite restaurant with clue</Text>
          <ButtonWrapper />
          <Text style={styles.connectTxt}>Or connect with social media</Text>
          <SocialButtons />
        </View>
      </View>
    </ScrollView>
  )
}

export default Welcome
