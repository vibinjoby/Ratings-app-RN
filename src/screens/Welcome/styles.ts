import { StyleSheet } from 'react-native'
import Typography from '../../utilities/typography'

export default StyleSheet.create({
  headerImg: {
    width: '100%',
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  titleTxt: {
    ...Typography.Title1.regular,
    fontSize: 18,
    marginTop: 72,
    textAlign: 'center',
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
  },
  getStartedBtn: { borderRadius: 19 },
  leftBtn: {
    flex: 1,
    marginRight: 10,
  },
  rightBtn: {
    flex: 1,
  },
  connectTxt: {
    ...Typography.Caption1.regular,
    marginTop: 56,
    fontSize: 14,
    textAlign: 'center',
  },
  gBtn: {
    marginVertical: 20,
  },
})
