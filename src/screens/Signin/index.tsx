import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { useState } from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'

import Button from '../../components/Button'
import TextField from '../../components/TextField'
import ThreeTabs from '../../components/ThreeTabs'
import routes from '../../navigations/routes'
import Typography from '../../utilities/typography'
import styles from './styles'

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [selectedTab, setSelectedTab] = useState(0)
  const navigation = useNavigation()

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
          <Text style={Typography.Title1.regular}>Log In</Text>
          <View style={styles.tabContainer}>
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
            onPress={() => console.log('pressed')}
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
