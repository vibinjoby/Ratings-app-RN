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
import { FormikErrors, FormikHandlers, FormikValues } from 'formik'
import _ from 'lodash'

import Button from '../../../../components/AppButton'
import AppTabs from '../../../../components/AppTabs'
import styles from '../styles/SignUpForm'
import Typography from '../../../../utilities/typography'
import AppTextInput from '../../../../components/AppTextInput'
import { SignUpData } from '../../constants'

export interface SignUpFormProps {
  values: FormikValues
  errors: FormikErrors<FormikValues>
  handleChange: (fieldName: string) => FormikHandlers['handleChange']
  onSignUp: ButtonProps['onPress']
  onSignIn: ButtonProps['onPress']
}

const SignUpForm = ({ onSignUp, onSignIn, values, errors, handleChange }: SignUpFormProps) => (
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
          <AppTabs
            selectedTab={values['selectedTab']}
            tabs={['Customer', 'Owner']}
            onPress={(tab) => handleChange('selectedTab')(tab)}
          />
        </View>

        {SignUpData.map((item) => (
          <AppTextInput
            inputValue={values[item.name]}
            testID={item.testID}
            key={item.key.toString()}
            onInputChange={handleChange(item.name)}
            textHint={item.placeholder}
            isProtected={item.secureEntry}
            errorText={errors[item.name] as string}
            containerStyle={styles.textInp}
            isPwdCheck={item.passwordGroupCheck}
          />
        ))}
        <Button
          testID="signupBtn"
          disabled={!_.isEmpty(errors)}
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
