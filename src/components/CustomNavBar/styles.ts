import { StyleSheet } from 'react-native'

import Colors from '../../utilities/colors'
import Typography from '../../utilities/typography'

const styles = StyleSheet.create({
  logoutBtn: {
    marginRight: 20,
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
})

export default styles
