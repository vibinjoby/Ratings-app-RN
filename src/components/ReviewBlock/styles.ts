import { StyleSheet } from 'react-native'
import Typography from '../../utilities/typography'

export default StyleSheet.create({
  container: {
    flex: 1,
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
  replyText: {
    alignSelf: 'flex-start',
    ...Typography.Caption1.regular,
    fontSize: 12,
  },
})
