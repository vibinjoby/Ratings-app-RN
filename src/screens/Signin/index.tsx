import React, { useEffect, useState } from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import Button from '../../components/Button'
import { RootState } from '../../store'
import TextField from '../../components/TextField'
import ThreeTabs from '../../components/ThreeTabs'
import routes from '../../navigations/routes'
import Typography from '../../utilities/typography'
import { loginUser } from '../../store/reducers/auth'
import styles from './styles'
import { loginUserAdmin } from '../../store/reducers/admin'

const SignIn: React.FC = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const token = useSelector((state: RootState) => state.auth.token)
  const adminToken = useSelector((state: RootState) => state.admin.token)
  const userType = useSelector((state: RootState) => state.auth.userInfo.typeOfUser)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [selectedTab, setSelectedTab] = useState(0)

  useEffect(() => {
    if (!token) return
    if (userType === 'customer') {
      //@ts-ignore
      navigation.navigate(routes.CUSTOMER_HOME_STACK)
    } else if (userType === 'owner') {
      //@ts-ignore
      navigation.navigate(routes.OWNER_HOME_STACK)
    }
  }, [userType])

  useEffect(() => {
    if (!adminToken) return
    //@ts-ignore
    navigation.navigate(routes.ADMIN_HOME_STACK)
  }, [adminToken])

  const handleLogin = () => {
    if (!email || !password) return

    let typeOfUser = ''
    if (selectedTab === 0) {
      typeOfUser = 'customer'
      dispatch(loginUser(email, password, typeOfUser))
    } else if (selectedTab === 1) {
      typeOfUser = 'owner'
      dispatch(loginUser(email, password, typeOfUser))
    } else {
      typeOfUser = 'admin'
      dispatch(loginUserAdmin(email, password))
    }
  }

  return (
    <ScrollView>
      <View style={styles.container} testID="signinContainer">
        <ImageBackground
          style={styles.bgContainer}
          source={require('../../assets/authBg/authBg.png')}
        >
          <Image source={require('../../assets/loginDish/loginDish.png')} />
        </ImageBackground>
        <View style={styles.contentContainer} testID="contentContainer">
          <Text style={Typography.Title1.regular}>Log In</Text>
          <View style={styles.tabContainer} testID="tabContainer">
            <ThreeTabs
              selectedTab={selectedTab}
              tab1Text="Customer"
              tab2Text="Owner"
              tab3Text="Admin"
              onTabSelect={(tab) => setSelectedTab(tab)}
            />
          </View>

          <TextField
            containerStyle={styles.emailField}
            textHint="Email/Username"
            inputValue={email}
            onInputChange={(e) => setEmail(e)}
            testID={'email'}
          />
          <TextField
            containerStyle={styles.pwdField}
            textHint="Password"
            isProtected
            inputValue={password}
            testID={'password'}
            onInputChange={(e) => setPassword(e)}
          />

          <Button
            testID="signinBtn"
            disabled={!email || !password}
            title="Log In"
            onPress={handleLogin}
            customStyle={styles.loginBtn}
          />
          <View style={styles.footerContainer}>
            <Text style={styles.footerTxt}>Don't have an account? </Text>

            <TouchableOpacity
              activeOpacity={0.7}
              // @ts-ignore
              onPress={() => navigation.navigate(routes.SIGNUP)}
            >
              <Text style={styles.signupTxt}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default SignIn
