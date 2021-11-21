import React from 'react'
import { useNavigation } from '@react-navigation/native'

import WelcomeView from '../components/WelcomeView'
import { ScreenNames } from '../../constants'

const Welcome: React.FC = () => {
  const navigation = useNavigation()

  const handleSignIn = () => navigation.navigate(ScreenNames.LOGIN)

  const handleSignUp = () => navigation.navigate(ScreenNames.SIGNUP)

  return <WelcomeView onSignIn={handleSignIn} onSignUp={handleSignUp} />
}

export default Welcome
