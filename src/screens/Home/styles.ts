import { Platform, StyleSheet } from 'react-native'
import Typography from '../../utilities/typography'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 20 : 0,
  },
  title: {
    ...Typography.Title1.bold,
    marginVertical: 15,
    marginLeft: 20,
  },
  flatlist: {
    paddingHorizontal: 20,
  },
  contentContainer: {
    paddingBottom: 80,
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
    paddingLeft: 20,
  },
  navHeader: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 6,
  },
  userPic: {
    width: 37,
    height: 37,
  },
  spacing: {
    marginBottom: 50,
  },
  footerSpacing: {
    marginBottom: 200,
  },
})
