import { StyleSheet } from 'react-native'
import Colors from '../../utilities/colors'
import Typography from '../../utilities/typography'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInp: {
    ...Typography.RegularFont,
  },
  replyWrapper: {
    flex: 1,
    borderWidth: 1.5,
    borderRadius: 30,
    borderColor: Colors.borderColor,
    padding: 12,
    marginRight: 26,
  },
})
