import * as yup from 'yup'

export const ScreenNames = {
  WELCOME: 'Welcome',
  LOGIN: 'Login',
  SIGNUP: 'Signup',
}

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
