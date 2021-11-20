import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'

import { ScreenNames } from '../../constants'
import { RegisterProps } from '../../types'
import SignUpView from '../components/SignUpView'

const SignUp: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0)

  const navigation = useNavigation()

  const handleSignUp = ({ fullName, email, password }: RegisterProps) => {
    if (!email || !password) return

    let typeOfUser = ''
    if (selectedTab === 0) {
      typeOfUser = 'customer'
    } else if (selectedTab === 1) {
      typeOfUser = 'owner'
    }
    //dispatch(registerUser(fullName, email, password, typeOfUser))
  }

  const handleSignIn = () => navigation.navigate(ScreenNames.LOGIN)

  return <SignUpView onSignIn={handleSignIn} onSignUp={handleSignUp} />
}

export default SignUp
