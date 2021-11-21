import { StyleSheet } from 'react-native'

import Colors from '../../../../utilities/colors'
import Typography from '../../../../utilities/typography'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contentWrapper: {
    padding: 25,
  },
  title: {
    ...Typography.BoldFont,
    fontSize: 24,
    marginTop: 10,
  },
  subheadWrapper: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  subhead: {
    ...Typography.Caption1.regular,
    fontSize: 14,
  },
  chevron: {
    position: 'absolute',
    right: 0,
    top: -50,
  },
  seperator: {
    borderBottomWidth: 1,
    borderColor: Colors.borderColor,
  },
  customerSalutation: {
    ...Typography.RegularFont,
    fontSize: 16,
    paddingLeft: 20,
  },

  logout: {
    marginRight: 20,
  },
})
