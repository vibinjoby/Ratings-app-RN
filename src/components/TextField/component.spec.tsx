import 'react-native'
import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'

import TextField from './component'

describe('TextField', () => {
  const mockval = 'Input'
  const onChangeTextMock = jest.fn()

  it('should render', () => {
    const { toJSON } = render(
      <TextField textHint="Email/Username" inputValue={mockval} onInputChange={onChangeTextMock} />,
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('should be able to input text', () => {
    const { getByTestId } = render(
      <TextField
        testID="textInput"
        textHint="Email/Username"
        inputValue={mockval}
        onInputChange={onChangeTextMock}
      />,
    )
    fireEvent.changeText(getByTestId('textInput'), mockval)
    expect(onChangeTextMock).toBeCalled()
  })
})
