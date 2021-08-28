import { StyleSheet } from 'react-native'

import Colors from '../../utilities/colors'
import Typography from '../../utilities/typography'

export default StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    padding: 15,
    backgroundColor: Colors.gBgColor,
    borderColor: Colors.gBgColor,
    borderRadius: 19,
  },
  fbBorder: {
    borderColor: Colors.fbButton,
    backgroundColor: Colors.fbBgColor,
  },
  socialImg: { width: 20, height: 20 },
  buttonText: {
    ...Typography.RegularFont,
    color: Colors.white,
    marginLeft: 20,
    fontSize: 18,
  },
  iconImgFb: {
    width: 10,
    height: 20,
  },
  iconImgGoogle: {
    width: 19,
    height: 19,
  },
  applebtn: {
    width: '100%',
    height: 50,
    marginTop: 20,
  },
})
