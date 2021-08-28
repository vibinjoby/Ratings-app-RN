import { StyleSheet } from 'react-native'
import Typography from '../../utilities/typography'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    ...Typography.Title1.bold,
    marginVertical: 15,
    marginLeft: 20,
  },
  flatlist: {
    paddingHorizontal: 20,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  customerSalutation: {
    ...Typography.RegularFont,
    fontSize: 16,
  },
  userPic: {
    width: 37,
    height: 37,
  },
  spacing: {
    marginBottom: 50,
  },
  footerSpacing: {
    marginBottom: 20,
  },
})