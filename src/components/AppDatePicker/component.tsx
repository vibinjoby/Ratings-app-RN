import React, { useState } from 'react'
import { View, Text } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import * as Sentry from '@sentry/react-native'
import moment from 'moment'

import styles from './styles'

export interface AppDatePickerProps {
  label?: string
  defaultDate?: string
  customStyle?: Record<string, unknown>
  onDateSelection?: (arg0: string) => void
  selectedDay?: () => number
  containerStyle?: Record<string, unknown>
  isPastAllowed?: boolean
  format?: string
}

const AppDatePicker: React.FC<AppDatePickerProps> = ({
  label,
  customStyle,
  onDateSelection,
  containerStyle,
}: AppDatePickerProps) => {
  const [date, setDate] = useState(new Date())

  const validateDateChange = (_: Event, date: Date | undefined) => {
    try {
      if (!date) return

      setDate(date)
      onDateSelection && onDateSelection(date.toDateString())
    } catch (error) {
      Sentry.captureException(error)
    }
  }
  /* 
  const DateIconComp = () => (
    <View style={styles.dateIcContainer}>
      <Image source={require('../../assets/calendar.png')} style={styles.calendarImg} />
    </View>
  ) */
  return (
    <View style={containerStyle}>
      <Text style={styles.appTxt}>{label}</Text>

      <DateTimePicker
        testID="datePicker"
        style={[styles.datePicker, customStyle]}
        mode="date"
        placeholderText="Select a date"
        value={date}
        maximumDate={moment().toDate()}
        dateFormat={'day month year'}
        onChange={validateDateChange}
      />
    </View>
  )
}

export default AppDatePicker
