import { StyleSheet } from 'react-native'

import Colors from '../../utilities/colors'
import Typography from '../../utilities/typography'

export default StyleSheet.create({
  container: {},
  imgBg: {
    borderRadius: 10,
    height: 141,
  },
  starImg: {
    marginRight: 5,
  },
  ratings: {
    ...Typography.RegularFont,
    color: Colors.white,
    fontSize: 14,
  },
  ratingWrapper: {
    alignSelf: 'flex-start',
    paddingHorizontal: 5,
    paddingTop: 2,
    backgroundColor: Colors.appOrange,
    flexDirection: 'row',
    borderRadius: 8,
    margin: 7,
  },
  starContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: -20,
  },
  restaurantTitle: {
    ...Typography.Title1.bold,
    marginTop: 5,
    fontSize: 24,
  },
  reviews: {
    ...Typography.Caption1.regular,
    fontSize: 14,
    marginTop: -3,
    marginLeft: 10,
  },
})
