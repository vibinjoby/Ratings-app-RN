import { Platform, StyleSheet } from 'react-native'

import Colors from '../../utilities/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blackLessOpacity,
    zIndex: 999,
  },
  animatableView: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: Platform.OS === 'ios' ? 80 : 50,
    backgroundColor: Colors.red,
    paddingBottom: 20,
  },
  internetTxt: {
    color: Colors.white,
    fontSize: 16,
  },
})
