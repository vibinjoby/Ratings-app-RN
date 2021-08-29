import { StyleSheet } from 'react-native'
import Colors from '../../utilities/colors'
import Typography from '../../utilities/typography'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  err: { color: Colors.red },
  placeholder: {
    fontSize: 16,
    zIndex: 999,
    position: 'absolute',
    marginTop: 5,
    fontWeight: '500',
    left: 0,
    top: -10,
    ...Typography.Caption1.regular,
  },
  textInput: {
    ...Typography.RegularFont,
    width: '100%',
    color: Colors.black,
    borderColor: Colors.textInputBorder,
    borderBottomWidth: 1,
    borderRadius: 4,
    paddingVertical: 15,
    paddingHorizontal: 3,
    fontSize: 16,
    marginBottom: 10,
    opacity: 0.8,
    marginTop: 10,
  },
  hidePwd: {
    position: 'absolute',
    right: 10,
    zIndex: 1,
    top: 15,
    width: 25,
    height: 25,
  },
  errTxt: {
    fontSize: 12,
    color: Colors.errorText,
    marginBottom: 5,
  },
})
