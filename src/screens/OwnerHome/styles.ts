import { StyleSheet } from 'react-native'
import Colors from '../../utilities/colors'
import Typography from '../../utilities/typography'

export default StyleSheet.create({
  container: {
    flex: 1,
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
  title: {
    ...Typography.Title1.bold,
    marginVertical: 15,
    marginLeft: 20,
  },
  flatlist: {
    paddingHorizontal: 20,
  },
  spacing: {
    marginBottom: 50,
  },
  footerSpacing: {
    marginBottom: 20,
  },
  plusIcContainer: {
    position: 'absolute',
    bottom: 34,
    right: 27,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.appOrange,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  plusTxt: {
    ...Typography.RegularFont,
    fontSize: 40,
    color: Colors.white,
  },
})
