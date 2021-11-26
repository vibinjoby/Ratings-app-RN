import { StyleSheet } from 'react-native'

import Colors from '../../../utilities/colors'
import Typography from '../../../utilities/typography'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headerBg: {
    height: 208,
    width: '100%',
  },
  titleWrapper: {
    shadowColor: Colors.black,
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowOpacity: 1.25,
    shadowRadius: 3.84,
    elevation: 20,
  },
  restaurantTitle: {
    ...Typography.BoldFont,
    fontSize: 24,
    color: Colors.black,
    position: 'absolute',
    bottom: 8,
    left: 24,
    shadowColor: Colors.white,
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowOpacity: 1.25,
    shadowRadius: 3.84,
    elevation: 20,
  },
  noReviewWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noReviewTxt: {
    ...Typography.RegularFont,
    fontSize: 24,
  },
  reviewBorder: {
    alignSelf: 'flex-start',
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 30,
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
  reviewTxt: {
    ...Typography.RegularFont,
    fontSize: 12,
    color: Colors.white,
  },
  contentContainer: {
    padding: 20,
  },
  reviewContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  reviewWrapper: {
    marginLeft: 20,
    flex: 1,
  },
  reviewerName: {
    ...Typography.Body.bold,
    fontSize: 16,
  },
  ratingWrapper: {
    flexDirection: 'row',
  },
  ratingOverview: {
    position: 'absolute',
    top: 8,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 2,
    backgroundColor: Colors.appGreen,
    flexDirection: 'row',
    borderRadius: 8,
    margin: 7,
  },
  starImg: {
    marginRight: 5,
  },
  ratings: {
    ...Typography.RegularFont,
    color: Colors.white,
    fontSize: 14,
  },
  comments: {
    ...Typography.RegularFont,
    fontSize: 18,
    marginVertical: 2,
  },
  visitDt: {
    ...Typography.Caption1.regular,
    fontSize: 10,
    marginLeft: 10,
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
  lowestWrapper: {
    marginTop: 20,
  },
  footer: {
    marginBottom: 20,
  },
  ownerWrapper: {
    borderLeftWidth: 4,
    paddingLeft: 10,
    paddingTop: 5,
    borderLeftColor: Colors.borderColor,
  },
  ownerTitleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ownerPic: {
    width: 30,
    height: 30,
  },
  ownerTitle: {
    ...Typography.Body.bold,
    fontSize: 14,
    marginLeft: 10,
  },
})
