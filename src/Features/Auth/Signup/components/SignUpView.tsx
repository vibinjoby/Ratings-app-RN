import React from 'react'
import {
  Image,
  ImageBackground,
  KeyboardType,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import * as yup from 'yup'
import { Formik } from 'formik'

import Button from '../../../../components/Button'
import CustomTextInput from '../../../../components/CustomTextInput'
import TwoTabs from '../../../../components/TwoTabs'
import styles from '../styles/SignUpView'
import Typography from '../../../../utilities/typography'
import { RegisterProps } from '../../types'

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
    name: 'confirmPwd',
    secureEntry: true,
  },
]

export interface SignUpViewProps {
  onSignUp: (arg0: RegisterProps) => void
  onSignIn: () => void
}

const SignUpView = ({ onSignUp, onSignIn }: SignUpViewProps) => (
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
            selectedTab={1}
            tab1Text="Customer"
            tab2Text="Owner"
            onTabSelect={(tab) => {
              /* setSelectedTab(tab) */
            }}
          />
        </View>
        <Formik
          onSubmit={() => console.log()}
          initialValues={{
            fullName: '',
            email: '',
            password: '',
            confirmPwd: '',
          }}
          validationSchema={yup.object().shape({
            fullName: yup.string().label('Full Name').required(),
            email: yup.string().email().label('Email').required(),
            password: yup
              .string()
              .label('Password')
              .matches(
                /^(?=.*\d)(?=.*[@$!%*#?&_])[A-Za-z\d@$!%*#?&_]{8,}$/,
                'Must Contain 8 Characters, One Number and one special case Character',
              )
              .required(),
            confirmPwd: yup
              .string()
              .label('Confirm Password')
              .oneOf([yup.ref('password'), null], 'Passwords must match')
              .required(),
          })}
        >
          {({
            values,
            handleChange,
            errors,
            setFieldTouched,
            touched,
            isValid,
            validateForm,
            dirty,
          }) => (
            <>
              {data.map((item) => (
                <CustomTextInput
                  testID={item.testID}
                  keyboardType={item.keyboardType as KeyboardType}
                  key={item.key.toString()}
                  onBlur={() => setFieldTouched(item.name)}
                  onFocus={() => validateForm()}
                  onChangeText={handleChange(item.name)}
                  placeholderTxt={item.placeholder}
                  touched={touched}
                  secureTextEntry={item.secureEntry}
                  name={item.name}
                  errors={errors}
                  customStyles={styles.textInp}
                />
              ))}
              <Button
                testID="signupBtn"
                disabled={!isValid || !dirty}
                title="Sign Up"
                onPress={() => onSignUp(values)}
                customStyle={styles.loginBtn}
              />
            </>
          )}
        </Formik>

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

export default React.memo(SignUpView)
