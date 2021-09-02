import { StyleSheet } from 'react-native'

import Colors from '../../utilities/colors'
import Typography from '../../utilities/typography'

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    width: 300,
    height: 300,
    right: 0,
  },
  dropdwnWrapper: {
    position: 'absolute',
    right: 0,
    top: 20,
    backgroundColor: Colors.white,
    borderRadius: 5,
    padding: 15,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  threeDotWrapper: {
    alignSelf: 'flex-end',
  },
  text: {
    ...Typography.RegularFont,
    fontSize: 14,
  },
  spacing: {
    marginBottom: 5,
  },
})
