import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'

import ReplyReview from './component'

describe('ReplyReview', () => {
  const MOCK_FN = jest.fn()
  const MOCK_ID = '123'
  const MOCK_VAL = 'test input'

  it('should render', () => {
    const { toJSON } = render(<ReplyReview _id={MOCK_ID} onSend={MOCK_FN} />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('should be clickable and able to input values', () => {
    const { getByTestId } = render(<ReplyReview _id={MOCK_ID} onSend={MOCK_FN} />)
    fireEvent.changeText(getByTestId('replyInput'), MOCK_VAL)
    fireEvent.press(getByTestId('sendBtn'))
    expect(MOCK_FN).toBeCalledWith(MOCK_VAL, MOCK_ID)
  })
})
