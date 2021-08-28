import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'

import Button from '../../components/Button'
import TextField from '../../components/TextField'
import TwoTabs from '../../components/TwoTabs'
import routes from '../../navigations/routes'
import Typography from '../../utilities/typography'
import styles from './styles'

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cnfrmPassword, setCnfrmPassword] = useState('')
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
          <Text style={Typography.Title1.regular}>Sign Up</Text>
          <View style={styles.tabContainer}>
            <TwoTabs
              selectedTab={selectedTab}
              tab1Text="Customer"
              tab2Text="Owner"
              onTabSelect={(tab) => setSelectedTab(tab)}
            />
          </View>

          <TextField
            testID="email"
            containerStyle={styles.emailField}
            textHint="Email/Username"
            inputValue={email}
            onInputChange={(e) => setEmail(e)}
          />
          <TextField
            testID="password"
            containerStyle={styles.pwdField}
            textHint="Password"
            isProtected
            inputValue={password}
            onInputChange={(e) => setPassword(e)}
          />
          <TextField
            testID="confirmPassword"
            containerStyle={styles.pwdField}
            textHint="Confirm Password"
            isProtected
            inputValue={cnfrmPassword}
            onInputChange={(e) => setCnfrmPassword(e)}
          />

          <Button
            testID="signupBtn"
            disabled={!email || !password}
            title="Sign Up"
            onPress={() => console.log('pressed')}
            customStyle={styles.loginBtn}
          />
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
