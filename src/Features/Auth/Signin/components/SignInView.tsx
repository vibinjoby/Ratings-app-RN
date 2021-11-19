import React from 'react'
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native'

import Button from '../../../../components/Button'
import TextField from '../../../../components/TextField'
import ThreeTabs from '../../../../components/ThreeTabs'
import Typography from '../../../../utilities/typography'
import styles from '../styles/SignInView'

export interface SignInViewProps {
  onLogin: () => void
  onSignUp: () => void
}

const SignInView = ({ onLogin, onSignUp }: SignInViewProps) => (
  <ScrollView>
    <View style={styles.container} testID="signinContainer">
      <ImageBackground
        style={styles.bgContainer}
        source={require('../../../../assets/authBg/authBg.png')}
      >
        <Image source={require('../../../../assets/loginDish/loginDish.png')} />
      </ImageBackground>
      <View style={styles.contentContainer} testID="contentContainer">
        <Text style={Typography.Title1.regular}>Log In</Text>
        <View style={styles.tabContainer} testID="tabContainer">
          <ThreeTabs
            selectedTab={1}
            tab1Text="Customer"
            tab2Text="Owner"
            tab3Text="Admin"
            onTabSelect={(tab) => {
              /* setSelectedTab(tab) */
            }}
          />
        </View>

        <TextField
          containerStyle={styles.emailField}
          textHint="Email/Username"
          inputValue={'email'}
          onInputChange={(e) => {
            /* setEmail(e) */
          }}
          testID={'email'}
        />
        <TextField
          containerStyle={styles.pwdField}
          textHint="Password"
          isProtected
          inputValue={'password'}
          testID={'password'}
          onInputChange={(e) => {
            /* setPassword(e) */
          }}
        />

        <Button
          testID="signinBtn"
          disabled={false} //!email || !password
          title="Log In"
          onPress={onLogin}
          customStyle={styles.loginBtn}
        />
        <View style={styles.footerContainer}>
          <Text style={styles.footerTxt}>Don't have an account? </Text>

          <TouchableOpacity activeOpacity={0.7} onPress={onSignUp}>
            <Text style={styles.signupTxt}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </ScrollView>
)

export default React.memo(SignInView)
