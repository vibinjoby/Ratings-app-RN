import { StyleSheet } from 'react-native'
import Typography from '../../utilities/typography'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userPic: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
  },
  nameContainer: {
    marginLeft: 10,
  },
  name: {
    ...Typography.BoldFont,
    fontSize: 16,
  },
  userType: {
    ...Typography.Caption1.regular,
    fontSize: 12,
  },
  deleteIc: {
    position: 'absolute',
    right: 0,
    width: 24,
    height: 24,
  },
})
