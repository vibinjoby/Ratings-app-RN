import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import SignInForm from '../components/SignInForm'
import { ScreenNames } from '../../constants'
import { useLogin } from '../../hooks'
import { useFormik } from 'formik'
import { LoginProps } from '../../types'

const SignIn: React.FC = () => {
  const navigation = useNavigation()
  /*   const dispatch = useDispatch()
  const token = useSelector((state: RootState) => state.auth.token)
  const adminToken = useSelector((state: RootState) => state.admin.token)
  const userType = useSelector((state: RootState) => state.auth.userInfo.typeOfUser) */
  const [selectedTab, setSelectedTab] = useState(0)
  const { values, setValues, setErrors, errors, setFieldError, handleChange } =
    useFormik<LoginProps>({
      initialValues: {
        email: '',
        password: '',
      },
      onSubmit: () => {},
    })

  const { onLoginMutate, data, loading, error } = useLogin({
    email: values['email'],
    password: values['password'],
  })

  useEffect(() => {
    console.log(values)
  }, [values])
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

  const handleSignUp = () => navigation.navigate(ScreenNames.SIGNUP)
  return (
    <SignInForm
      onSignUp={handleSignUp}
      onLogin={onLoginMutate}
      values={values}
      handleChange={(fieldName: string) => (e: React.ChangeEvent) => {
        setFieldError(fieldName, '')
        handleChange(fieldName)(e)
      }}
    />
  )
}

export default SignIn
