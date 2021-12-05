import React from 'react'
import {
  ButtonProps,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import _ from 'lodash'
import { FormikErrors, FormikHandlers, FormikValues } from 'formik'

import Button from '../../../../components/AppButton'
import AppTextInput from '../../../../components/AppTextInput'
import AppTabs from '../../../../components/AppTabs'
import styles from '../styles'
import Typography from '../../../../utilities/typography'
import { SignInData } from '../../constants'

export interface SignInFormProps {
  onLogin: ButtonProps['onPress']
  onSignUp: ButtonProps['onPress']
  values: FormikValues
  errors: FormikErrors<FormikValues>
  handleChange: (fieldName: string) => FormikHandlers['handleChange']
}

const SignInForm = ({ onLogin, onSignUp, values, errors, handleChange }: SignInFormProps) => (
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
          <AppTabs
            selectedTab={values['selectedTab']}
            tabs={['Customer', 'Owner', 'Admin']}
            onPress={(tab) => handleChange('selectedTab')(tab)}
          />
        </View>
        {SignInData.map((item) => (
          <AppTextInput
            key={item.key}
            containerStyle={styles.emailField}
            textHint={item.placeholder}
            isProtected={item.secureEntry}
            inputValue={values[item.name]}
            onInputChange={handleChange(item.name)}
            testID={item.name}
            errorText={values['selectedTab'] !== 2 ? (errors[item.name] as string) : null}
          />
        ))}

        <Button
          testID="signinBtn"
          disabled={
            (!_.isEmpty(errors) || !values['email'] || !values['password']) &&
            values['selectedTab'] !== 2
          }
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

export default SignInForm
