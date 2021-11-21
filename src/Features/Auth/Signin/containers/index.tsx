import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'

import SignInForm from '../components/SignInForm'
import { ScreenNames } from '../../constants'
import { ScreenNames as BaseModuleScreenNames } from '../../../../BaseModule/constants'
import { ScreenNames as HomeScreenNames } from '../../../Home/constants'
import { useAdminLogin, useLogin } from '../../hooks'
import { LoginProps } from '../../types'
import ApiResult from '../../../../components/ApiResult'
import { determineUserTypeByTabSelection } from '../../helpers'
import { UserType } from '../../../../../__generated__/globalTypes'
import { decodeToken } from '../../../../utilities/helpers'
import userInfoVars, { UserInfoProps } from '../../../../store'

const SignIn: React.FC = () => {
  const navigation = useNavigation()
  const { values, setFieldValue } = useFormik<LoginProps>({
    initialValues: {
      email: '',
      password: '',
      selectedTab: 0,
    },
    onSubmit: () => {},
  })

  const { onLoginMutate, data, loading, error } = useLogin({
    email: values['email'],
    password: values['password'],
    userType: determineUserTypeByTabSelection(values['selectedTab']),
  })

  const {
    onAdminLoginMutate,
    data: adminData,
    loading: adminLoading,
    error: adminError,
  } = useAdminLogin({
    username: values['email'],
    password: values['password'],
  })

  useEffect(() => {
    if (data?.login?.token || adminData?.loginAsAdmin?.token) {
      const userType = determineUserTypeByTabSelection(values['selectedTab'])
      // Save the token to Async storage
      const { userInfo, token } = decodeToken(
        userType !== UserType.admin ? data.login.token : adminData?.loginAsAdmin?.token,
        userType === UserType.admin,
      ) // Save the info to cache
      userInfoVars({ token, userInfo } as UserInfoProps)

      // Navigate to home based on user type
      navigation.reset({
        index: 0,
        routes: [
          {
            name: BaseModuleScreenNames.HOME_STACK,
            params: {
              initialRoute:
                userType === UserType.customer
                  ? HomeScreenNames.CUSTOMER_HOME
                  : userType === UserType.owner
                  ? HomeScreenNames.OWNER_HOME
                  : HomeScreenNames.ADMIN_HOME,
            },
          },
        ],
      })
    }
  }, [data, adminData])

  const handleSignUp = () => navigation.navigate(ScreenNames.SIGNUP)

  const handleLogin = () => {
    const userType = determineUserTypeByTabSelection(values['selectedTab'])
    if (userType === UserType.admin) {
      onAdminLoginMutate()
    } else {
      onLoginMutate()
    }
  }

  return (
    <ApiResult loading={loading || adminLoading} error={error || adminError}>
      <SignInForm
        onSignUp={handleSignUp}
        onLogin={handleLogin}
        values={values}
        handleChange={(fieldName: string) => (e: React.ChangeEvent) => {
          setFieldValue(fieldName, e)
        }}
      />
    </ApiResult>
  )
}

export default SignIn
