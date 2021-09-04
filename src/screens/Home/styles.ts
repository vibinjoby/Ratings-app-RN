import { Platform, StyleSheet } from 'react-native'
import Colors from '../../utilities/colors'
import Typography from '../../utilities/typography'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: Platform.OS === 'android' ? 20 : 0,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    ...Typography.Title1.bold,
    marginVertical: 15,
    marginLeft: 20,
  },
  sortIc: {
    marginRight: 20,
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
    shadowColor: Colors.black,
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
  logoutBtn: {
    marginRight: 20,
  },
})
