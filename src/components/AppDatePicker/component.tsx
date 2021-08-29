import React, { useState } from 'react'
import { View, Image, Text } from 'react-native'
import DatePicker from 'react-native-datepicker'
import * as Sentry from '@sentry/react-native'
import moment from 'moment'

import styles from './styles'

export interface AppDatePickerProps {
  label?: string
  defaultDate?: string
  customStyle?: object
  onDateSelection?: (arg0: string) => void
  selectedDay?: () => number
  containerStyle?: object
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
  const [date, setDate] = useState<any>()

  const validateDateChange = (date: string) => {
    try {
      setDate(date)
      onDateSelection && onDateSelection(date)
    } catch (error) {
      Sentry.captureException(error)
    }
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
