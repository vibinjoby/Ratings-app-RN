import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'

import AppDatePicker from './component'

describe.skip('AppDatePicker', () => {
  const MOCK_FN = jest.fn()

  it('should be able to click on the date picker and change date', () => {
    const today = new Date()
    const { getByTestId } = render(<AppDatePicker onDateSelection={MOCK_FN} />)
    fireEvent(getByTestId('datePicker'), 'onDateChange', today)
    expect(MOCK_FN).toBeCalledWith(today)
  })
})
