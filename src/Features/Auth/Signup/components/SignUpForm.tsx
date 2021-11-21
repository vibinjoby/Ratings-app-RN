import React from 'react'
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { FormikErrors, FormikHandlers, FormikValues } from 'formik'

import Button from '../../../../components/Button'
import TwoTabs from '../../../../components/TwoTabs'
import styles from '../styles/SignUpForm'
import Typography from '../../../../utilities/typography'
import { RegisterProps } from '../../types'
import TextField from '../../../../components/TextField'

const data = [
  { key: 1, testID: 'fullName', placeholder: 'Full Name', name: 'fullName' },
  {
    key: 2,
    testID: 'email',
    placeholder: 'Email',
    name: 'email',
    keyboardType: 'email-address',
  },
  {
    key: 3,
    testID: 'password',
    placeholder: 'Create Password',
    name: 'password',
    secureEntry: true,
  },
  {
    key: 4,
    testID: 'confirmPassword',
    placeholder: 'Confirm Password',
    name: 'confirmPassword',
    secureEntry: true,
  },
]

export interface SignUpFormProps {
  values: FormikValues
  errors: FormikErrors<RegisterProps>
  isValid: boolean
  dirty: boolean
  handleChange: (fieldName: string) => FormikHandlers['handleChange']
  onSignUp: () => void
  onSignIn: () => void
}

const SignUpForm = ({
  onSignUp,
  onSignIn,
  values,
  errors,
  isValid,
  dirty,
  handleChange,
}: SignUpFormProps) => (
  <ScrollView testID="scrollContainer">
    <View style={styles.container} testID="signupContainer">
      <ImageBackground
        style={styles.bgContainer}
        source={require('../../../../assets/authBg/authBg.png')}
      >
        <Image source={require('../../../../assets/loginDish/loginDish.png')} />
      </ImageBackground>
      <View style={styles.contentContainer} testID="contentContainer">
        <Text style={Typography.Title1.regular}>Sign Up</Text>
        <View style={styles.tabContainer} testID="tabContainer">
          <TwoTabs
            selectedTab={values['selectedTab']}
            tab1Text="Customer"
            tab2Text="Owner"
            onTabSelect={(tab) => handleChange('selectedTab')(tab)}
          />
        </View>

        {data.map((item) => (
          <TextField
            inputValue={values[item.name]}
            testID={item.testID}
            key={item.key.toString()}
            onInputChange={handleChange(item.name)}
            textHint={item.placeholder}
            isProtected={item.secureEntry} //@ts-ignore
            errorText={errors[item.name]}
            containerStyle={styles.textInp}
          />
        ))}
        <Button
          testID="signupBtn"
          disabled={!isValid || !dirty}
          title="Sign Up"
          onPress={onSignUp}
          customStyle={styles.loginBtn}
        />

        <View style={styles.footerContainer}>
          <Text style={styles.footerTxt}>Already have an account? </Text>

          <TouchableOpacity activeOpacity={0.7} onPress={onSignIn}>
            <Text style={styles.signupTxt}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </ScrollView>
)

export default React.memo(SignUpForm)
