import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import SignInView from '../components/SignInView'
import { ScreenNames } from '../../constants'

const SignIn: React.FC = () => {
  const navigation = useNavigation()
  /*   const dispatch = useDispatch()
  const token = useSelector((state: RootState) => state.auth.token)
  const adminToken = useSelector((state: RootState) => state.admin.token)
  const userType = useSelector((state: RootState) => state.auth.userInfo.typeOfUser) */
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [selectedTab, setSelectedTab] = useState(0)
  /* 
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
 */

  const handleLogin = () => {
    console.log('object')
  }
  const handleSignUp = () => navigation.navigate({ key: ScreenNames.SIGNUP })
  return <SignInView onSignUp={handleSignUp} onLogin={handleLogin} />
}

export default SignIn
