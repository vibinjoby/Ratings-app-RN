import { StyleSheet } from 'react-native'
import Colors from '../../utilities/colors'
import Typography from '../../utilities/typography'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 16,
  },
  titleTxt: {
    ...Typography.BoldFont,
    fontSize: 22,
    textAlign: 'center',
  },
  subtitleTxt: {
    ...Typography.RegularFont,
    fontSize: 15,
    color: Colors.lightText,
    textAlign: 'center',
  },
  textInp: {
    padding: 20,
    height: 264,
    borderRadius: 15,
    backgroundColor: Colors.borderColor,
  },
  textHint: {
    ...Typography.Caption1.regular,
    fontSize: 12,
  },
  starWrapper: {
    alignItems: 'center',
    marginTop: 36,
    marginBottom: 40,
  },
  starSpacing: { marginRight: 30 },
  btn: {
    borderRadius: 19,
    marginTop: 40,
  },
  datePicker: {
    marginTop: 15,
  },
})
