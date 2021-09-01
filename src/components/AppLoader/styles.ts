import { StyleSheet } from 'react-native'
import Colors from '../../utilities/colors'

export default StyleSheet.create({
  modalWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blackMoreOpacity,
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 4,
    backgroundColor: Colors.white,
  },
})
