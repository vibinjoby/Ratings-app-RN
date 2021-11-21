import React from 'react'
import { FormikHandlers, FormikValues } from 'formik'
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native'

import Button from '../../../../components/Button'
import TextField from '../../../../components/TextField'
import ThreeTabs from '../../../../components/ThreeTabs'
import Typography from '../../../../utilities/typography'
import styles from '../styles'

export interface SignInFormProps {
  onLogin: () => void
  onSignUp: () => void
  values: FormikValues
  handleChange: (fieldName: string) => FormikHandlers['handleChange']
}

const SignInForm = ({ onLogin, onSignUp, values, handleChange }: SignInFormProps) => (
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
            selectedTab={values['selectedTab']}
            tab1Text="Customer"
            tab2Text="Owner"
            tab3Text="Admin"
            onTabSelect={(tab) => handleChange('selectedTab')(tab)}
          />
        </View>

        <TextField
          containerStyle={styles.emailField}
          textHint="Email/Username"
          inputValue={values['email']}
          onInputChange={handleChange('email')}
          testID={'email'}
        />
        <TextField
          containerStyle={styles.pwdField}
          textHint="Password"
          isProtected
          inputValue={values['password']}
          testID={'password'}
          onInputChange={handleChange('password')}
        />

        <Button
          testID="signinBtn"
          disabled={!values['email'] || !values['password']}
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

export default React.memo(SignInForm)
