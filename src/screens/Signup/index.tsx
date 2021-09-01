import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardType,
} from 'react-native'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import { Formik } from 'formik'

import Button from '../../components/Button'
import TwoTabs from '../../components/TwoTabs'
import routes from '../../navigations/routes'
import { registerUser } from '../../store/reducers/auth'
import Typography from '../../utilities/typography'
import styles from './styles'
import CustomTextInput from '../../components/CustomTextInput'

type RegisterType = {
  fullName: string
  email: string
  password: string
}

const SignUp: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0)

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

  const navigation = useNavigation()
  const dispatch = useDispatch()

  const handleSignUp = ({ fullName, email, password }: RegisterType) => {
    if (!email || !password) return

    let typeOfUser = ''
    if (selectedTab === 0) {
      typeOfUser = 'customer'
    } else if (selectedTab === 1) {
      typeOfUser = 'owner'
    }
    dispatch(registerUser(fullName, email, password, typeOfUser))
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          style={styles.bgContainer}
          source={require('../../assets/authBg/authBg.png')}
        >
          <Image source={require('../../assets/loginDish/loginDish.png')} />
        </ImageBackground>
        <View style={styles.contentContainer}>
          <Text style={Typography.Title1.regular}>Sign Up</Text>
          <View style={styles.tabContainer}>
            <TwoTabs
              selectedTab={selectedTab}
              tab1Text="Customer"
              tab2Text="Owner"
              onTabSelect={(tab) => setSelectedTab(tab)}
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
                  onPress={() => handleSignUp(values)}
                  customStyle={styles.loginBtn}
                />
              </>
            )}
          </Formik>

          <View style={styles.footerContainer}>
            <Text style={styles.footerTxt}>Already have an account? </Text>

            <TouchableOpacity
              activeOpacity={0.7}
              // @ts-ignore
              onPress={() => navigation.navigate(routes.LOGIN)}
            >
              <Text style={styles.signupTxt}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default SignUp
