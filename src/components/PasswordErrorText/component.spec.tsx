import React from 'react'
import { render } from '@testing-library/react-native'

import PasswordErrorText from './component'

describe('PasswordErrorText', () => {
  const ERROR_URI = '../../../src/assets/error.png'
  const SUCCESS_URI = '../../../src/assets/success-img.png'
  const VAL_1 = '12345'
  const VAL_2 = 'vibinjoby'
  const VAL_3 = 'VIBINJOBY'
  const VAL_4 = 'Vibinjoby'
  const VAL_5 = 'Vibinjoby@'
  const VAL_6 = 'Password123!'

  it('should render', () => {
    const { toJSON } = render(<PasswordErrorText inputValue={VAL_1} />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('should show errors for At least 8 characters', () => {
    const { getByTestId } = render(<PasswordErrorText inputValue={VAL_1} />)
    expect(getByTestId('lessCharacters').props.source.testUri).toBe(ERROR_URI)
  })

  it('should show errors for At least 1 uppercase letter', () => {
    const { getByTestId } = render(<PasswordErrorText inputValue={VAL_2} />)
    expect(getByTestId('minUppercase').props.source.testUri).toBe(ERROR_URI)
  })

  it('should show errors for At least 1 lowercase letter', () => {
    const { getByTestId } = render(<PasswordErrorText inputValue={VAL_3} />)
    expect(getByTestId('minLowercase').props.source.testUri).toBe(ERROR_URI)
  })

  it('should show errors for At least 1 special character(#,%,&)', () => {
    const { getByTestId } = render(<PasswordErrorText inputValue={VAL_4} />)
    expect(getByTestId('minSplCharacter').props.source.testUri).toBe(ERROR_URI)
  })

  it('should show errors for At least 1 number (0-9)', () => {
    const { getByTestId } = render(<PasswordErrorText inputValue={VAL_5} />)
    expect(getByTestId('minNumber').props.source.testUri).toBe(ERROR_URI)
  })

  it('should show no errors', () => {
    const { getByTestId } = render(<PasswordErrorText inputValue={VAL_6} />)
    expect(getByTestId('lessCharacters').props.source.testUri).toBe(SUCCESS_URI)
    expect(getByTestId('minUppercase').props.source.testUri).toBe(SUCCESS_URI)
    expect(getByTestId('minLowercase').props.source.testUri).toBe(SUCCESS_URI)
    expect(getByTestId('minSplCharacter').props.source.testUri).toBe(SUCCESS_URI)
    expect(getByTestId('minNumber').props.source.testUri).toBe(SUCCESS_URI)
  })
})
