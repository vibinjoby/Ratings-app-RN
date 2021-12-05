import { StyleSheet } from 'react-native'

import Colors from '../../../../utilities/colors'
import Typography from '../../../../utilities/typography'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: 15,
  },
  title: {
    ...Typography.BoldFont,
    fontSize: 20,
    marginBottom: 5,
  },
  textInp: {
    backgroundColor: Colors.borderColor,
    padding: 10,
    marginBottom: 10,
  },
  stars: {
    marginBottom: 10,
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
