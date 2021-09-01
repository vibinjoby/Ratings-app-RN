import { StyleSheet } from 'react-native'

import Colors from '../../utilities/colors'
import Typography from '../../utilities/typography'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'flex-start',
    marginRight: 10,
    backgroundColor: Colors.white,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  img: {
    height: 165,
    borderTopEndRadius: 8,
    borderTopLeftRadius: 8,
  },
  title: {
    ...Typography.BoldFont,
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 6,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  ratings: {
    fontSize: 13,
    color: Colors.lightText,
    marginHorizontal: 5,
  },
  reviews: {
    fontSize: 13,
    color: Colors.lightText,
    marginRight: 5,
  },
})
