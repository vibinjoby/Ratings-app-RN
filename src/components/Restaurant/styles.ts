import { StyleSheet } from 'react-native'

import Colors from '../../utilities/colors'
import Typography from '../../utilities/typography'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgBg: {
    borderRadius: 10,
    height: 80,
    width: 80,
    marginEnd: 20,
  },
  starImg: {
    marginRight: 5,
  },
  ratings: {
    ...Typography.Caption1.regular,
    fontSize: 12,
    marginRight: 10,
  },
  ratingWrapper: {
    paddingHorizontal: 5,
    paddingTop: 2,
    backgroundColor: Colors.appOrange,
    flexDirection: 'row',
    borderRadius: 8,
    margin: 7,
  },
  starContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  restaurantTitle: {
    ...Typography.Title1.regular,
    marginTop: 5,
    fontSize: 24,
    maxWidth: 200,
  },
  reviews: {
    ...Typography.Caption1.regular,
    fontSize: 14,
  },
  chevron: {
    position: 'absolute',
    right: 10,
  },
})
