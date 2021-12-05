import { StyleSheet } from 'react-native'

import Colors from '../../utilities/colors'
import Typography from '../../utilities/typography'

export default StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
  },
  tabTxt: {
    ...Typography.RegularFont,
    fontSize: 16,
  },
  leftTab: {
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    marginRight: 2,
  },
  middleTab: {
    marginRight: 2,
  },
  rightTab: {
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
  },
  tabs: {
    backgroundColor: Colors.borderColor,
    paddingHorizontal: 14,
    paddingVertical: 8,
    alignItems: 'center',
    borderColor: Colors.white,
    borderWidth: 1,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  selectedTab: {
    backgroundColor: Colors.appOrange,
  },
  selectedTabText: {
    color: Colors.white,
  },
})
