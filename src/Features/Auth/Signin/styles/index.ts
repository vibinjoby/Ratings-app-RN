import { StyleSheet } from 'react-native'

import Colors from '../../../../utilities/colors'
import Typography from '../../../../utilities/typography'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 240,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  tabContainer: {
    marginTop: 20,
    alignSelf: 'center',
  },
  emailField: {
    marginVertical: 20,
  },
  pwdField: {
    marginBottom: 20,
  },
  forgotPwdContainer: {
    alignSelf: 'flex-end',
  },
  forgotPwdTxt: {
    ...Typography.Body.regular,
    fontSize: 14,
  },
  loginBtn: {
    padding: 24,
    borderRadius: 19,
    marginTop: 40,
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  footerTxt: {
    ...Typography.RegularFont,
    fontSize: 14,
  },
  signupTxt: {
    ...Typography.RegularFont,
    fontSize: 14,
    color: Colors.appGreen,
  },
})

export default styles
