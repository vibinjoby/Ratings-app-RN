import { StyleSheet } from 'react-native'
import Colors from '../../utilities/colors'
import Typography from '../../utilities/typography'

export default StyleSheet.create({
  container: {},
  textHint: {
    ...Typography.Caption1.regular,
  },
  inputText: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    ...Typography.Body.regular,
    width: '100%',
    borderColor: Colors.borderColor,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordEye: {
    position: 'absolute',
    right: 0,
  },
  errTxt: {
    fontSize: 12,
    color: Colors.errorText,
    marginBottom: 5,
  },
})
