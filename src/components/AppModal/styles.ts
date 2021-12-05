import { StyleSheet } from 'react-native'
import Colors from '../../utilities/colors'
import Typography from '../../utilities/typography'

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 15,
  },
  contentTxt: {
    ...Typography.RegularFont,
    fontSize: 20,
    textAlign: 'center',
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 25,
  },
  cancelBtn: {
    minWidth: 115,
    borderRadius: 5,
    backgroundColor: Colors.borderColor,
  },
  yesBtn: {
    minWidth: 115,
    borderRadius: 5,
    backgroundColor: Colors.appOrange,
  },
})
