import 'react-native'
import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'

import CustomTextInput from './component'

describe('CustomTextInput', () => {
  const mockval = 'Input'
  const onChangeTextMock = jest.fn()

  it('should render', () => {
    const { toJSON } = render(
      <CustomTextInput
        testID="items"
        onBlur={() => console.log('blurred')}
        onFocus={() => console.log('validate form')}
        onChangeText={() => console.log('onchange text')}
        touched={{ key: false }}
        name={'textinput'}
        errors={{ key: 'errors' }}
      />,
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('should be able to input text', () => {
    const { getByTestId } = render(
      <CustomTextInput
        testID="textInput"
        onBlur={() => console.log('blurred')}
        onFocus={() => console.log('validate form')}
        onChangeText={onChangeTextMock}
        touched={{ key: false }}
        name={'textinput'}
        errors={{ key: 'errors' }}
      />,
    )
    fireEvent.changeText(getByTestId('textInput'), mockval)
    expect(onChangeTextMock).toBeCalled()
  })
})
