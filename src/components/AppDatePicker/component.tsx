import React, { useState } from 'react'
import { View, Text, Image, ViewProps } from 'react-native'
import DatePicker from 'react-native-datepicker'
import moment from 'moment'

import styles from './styles'

export interface AppDatePickerProps {
  label?: string
  defaultDate?: string
  customStyle?: ViewProps['style']
  onDateSelection?: (arg0: string) => void
  selectedDay?: () => number
  containerStyle?: ViewProps['style']
  isPastAllowed?: boolean
  format?: string
}

const AppDatePicker: React.FC<AppDatePickerProps> = ({
  label,
  customStyle,
  onDateSelection,
  containerStyle,
  format = 'Do MMM,YYYY',
}: AppDatePickerProps) => {
  const [date, setDate] = useState(new Date())

  const validateDateChange = (_: Event, date: Date | undefined) => {
    if (!date) return

    setDate(date)
    onDateSelection && onDateSelection(date.toDateString())
  }

  const DateIconComp = () => (
    <View style={styles.dateIcContainer}>
      <Image source={require('../../assets/calendar.png')} style={styles.calendarImg} />
    </View>
  )
  return (
    <View style={containerStyle}>
      <Text style={styles.appTxt}>{label}</Text>

      <DatePicker
        testID="datePicker"
        style={[styles.datePicker, customStyle]}
        mode="date"
        placeholder="Select a date"
        date={date}
        maxDate={moment().toDate()}
        format={format}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        iconComponent={<DateIconComp />}
        customStyles={{
          dateInput: styles.textInput,
          datePicker: {
            backgroundColor: '#d1d3d8',
            justifyContent: 'center',
          },
        }}
        onDateChange={validateDateChange}
      />
    </View>
  )
}

export default AppDatePicker
