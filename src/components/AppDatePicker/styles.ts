import { StyleSheet } from 'react-native'
import Colors from '../../utilities/colors'
import Typography from '../../utilities/typography'

export default StyleSheet.create({
  container: {},
  textInput: {
    fontFamily: 'Apercu-Light',
    fontSize: 14,
    padding: 10,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    alignItems: 'flex-start',
    color: Colors.textInputBorder,
    borderColor: Colors.datePickerBorder,
    borderWidth: 1,
    borderRightWidth: 0,
  },
  dateIcContainer: {
    borderWidth: 1,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    padding: 9,
    borderColor: Colors.datePickerBorder,
  },
  dateIcon: {
    width: 20,
    height: 20,
    marginLeft: -1,
    borderColor: Colors.datePickerBorder,
  },
  calendarImg: {
    width: 20,
    height: 20,
  },
  appTxt: {
    ...Typography.RegularFont,
    fontSize: 16,
    color: Colors.black,
    marginBottom: 10,
  },
  datePicker: {
    width: '100%',
    textAlign: 'left',
  },
})
