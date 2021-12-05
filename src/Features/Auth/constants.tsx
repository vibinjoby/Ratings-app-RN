import * as yup from 'yup'

export const ScreenNames = {
  WELCOME: 'Welcome',
  LOGIN: 'Login',
  SIGNUP: 'Signup',
}

export const SignUpData = [
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
    passwordGroupCheck: true,
  },
  {
    key: 4,
    testID: 'confirmPassword',
    placeholder: 'Confirm Password',
    name: 'confirmPassword',
    secureEntry: true,
    passwordGroupCheck: false,
  },
]

export const SignInData = [
  {
    key: 1,
    testID: 'email',
    placeholder: 'Email',
    name: 'email',
    keyboardType: 'email-address',
  },
  {
    key: 2,
    testID: 'password',
    placeholder: 'Password',
    name: 'password',
    secureEntry: true,
  },
]

export const SignInValidationSchema = yup.object().shape({
  email: yup.string().email().label('Email').required(),
  password: yup
    .string()
    .label('Password')
    .matches(
      /^(?=.*\d)(?=.*[@$!%*#?&_])[A-Za-z\d@$!%*#?&_]{8,}$/,
      'Must Contain 8 Characters, One Number and one special case Character',
    )
    .required(),
})

export const SignUpValidationSchema = yup.object().shape({
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
  confirmPassword: yup
    .string()
    .label('Confirm Password')
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required(),
})
