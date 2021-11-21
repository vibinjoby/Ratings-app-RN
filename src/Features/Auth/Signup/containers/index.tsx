import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'

import { ScreenNames, SignUpValidationSchema } from '../../constants'
import { ScreenNames as BaseModuleScreenNames } from '../../../../BaseModule/constants'
import { ScreenNames as HomeScreenNames } from '../../../Home/constants'
import { RegisterProps } from '../../types'
import { useRegister } from '../../hooks'
import SignUpForm from '../components/SignUpForm'
import { determineUserTypeByTabSelection } from '../../helpers'
import ApiResult from '../../../../components/ApiResult'
import { decodeAndSaveToken } from '../../../../utilities/helpers'
import { UserType } from '../../../../../__generated__/globalTypes'

const SignUp: React.FC = () => {
  const navigation = useNavigation()

  const { values, errors, setFieldValue, isValid, dirty } = useFormik<RegisterProps>({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      selectedTab: 0,
    },
    validationSchema: SignUpValidationSchema,
    onSubmit: () => {},
  })

  const { onRegisterMutate, loading, error } = useRegister({
    email: values['email'],
    password: values['password'],
    fullName: values['fullName'],
    userType: determineUserTypeByTabSelection(values['selectedTab']),
  })

  const handleSignUp = async () => {
    const { data } = await onRegisterMutate()
    const userType = determineUserTypeByTabSelection(values['selectedTab'])
    decodeAndSaveToken(data?.createUser?.token, false)

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

  const handleSignIn = () => navigation.navigate(ScreenNames.LOGIN)

  return (
    <ApiResult loading={loading} error={error}>
      <SignUpForm
        onSignIn={handleSignIn}
        onSignUp={handleSignUp}
        values={values}
        errors={errors}
        isValid={isValid}
        dirty={dirty}
        handleChange={(fieldName: string) => (e: React.ChangeEvent) => {
          setFieldValue(fieldName, e)
        }}
      />
    </ApiResult>
  )
}

export default SignUp
