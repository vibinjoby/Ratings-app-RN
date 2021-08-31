import { StyleSheet } from 'react-native'

import Colors from '../../utilities/colors'
import Typography from '../../utilities/typography'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  ownerWrapper: {
    borderLeftWidth: 4,
    paddingLeft: 10,
    paddingTop: 5,
    borderLeftColor: Colors.borderColor,
  },
  ownerTitleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ownerPic: {
    width: 30,
    height: 30,
  },
  ownerTitle: {
    ...Typography.Body.bold,
    fontSize: 14,
    marginLeft: 10,
  },
})
