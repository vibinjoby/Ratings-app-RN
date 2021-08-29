import { StyleSheet } from 'react-native'
import Colors from '../../utilities/colors'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  headerTxt: {
    color: Colors.headerErrColor,
  },
  subHeader: {
    color: Colors.subHeaderErrColor,
  },
  img: {
    width: 10,
    height: 10,
    marginTop: 3,
    marginRight: 3,
  },
})
