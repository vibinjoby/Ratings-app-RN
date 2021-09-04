import { StyleSheet } from 'react-native'

import Colors from '../../utilities/colors'
import Typography from '../../utilities/typography'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 20,
  },
  reviewContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
  },
  noReviewWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noReviewTxt: {
    ...Typography.RegularFont,
    fontSize: 24,
  },
  deleteIc: {
    marginRight: 20,
  },
})
