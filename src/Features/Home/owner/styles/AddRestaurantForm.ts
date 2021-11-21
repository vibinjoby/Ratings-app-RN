import { StyleSheet } from 'react-native'

import Typography from '../../../../utilities/typography'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    ...Typography.BoldFont,
    fontSize: 22,
    marginBottom: 20,
  },
  textInp: {
    marginBottom: 10,
  },
  saveBtn: {
    padding: 24,
    borderRadius: 19,
    marginTop: 40,
  },
})
