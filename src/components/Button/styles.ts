import { StyleSheet } from 'react-native'
import Colors from '../../utilities/colors'
import Typography from '../../utilities/typography'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.appGreen,
    padding: 14,
    alignItems: 'center',
    borderRadius: 30,
  },
  btnTxt: {
    ...Typography.Body.regular,
    color: Colors.white,
  },
})
