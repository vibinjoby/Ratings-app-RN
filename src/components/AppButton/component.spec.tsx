import 'react-native'
import React from 'react'
import Button from './component'

import { render, fireEvent } from '@testing-library/react-native'

describe('Button', () => {
  const callbackFn = jest.fn()
  const mockTitle = 'title'

  it('should match snapshot', () => {
    const { toJSON } = render(<Button title={mockTitle} onPress={callbackFn} />)
    expect(toJSON).toMatchSnapshot()
  })

  it('should be able to click the button', () => {
    const { getByTestId } = render(
      <Button title={mockTitle} onPress={callbackFn} testID="buttonContainer" />,
    )
    fireEvent.press(getByTestId('buttonContainer'))
    expect(callbackFn).toBeCalled()
  })

  it('should be render button text', () => {
    const { getByText } = render(<Button title={mockTitle} onPress={callbackFn} />)
    expect(getByText(mockTitle)).toBeTruthy()
  })
})
