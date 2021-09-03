import 'react-native'
import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'

import EditResponse from './component'

describe('EditResponse', () => {
  const mockFn = jest.fn()
  const MOCK_CUSTOMER_RESPONSE = 'thanks for the food'
  const MOCK_OWNER_RESPONSE = 'Thanks for the review'
  const MOCK_RATINGS = 4
  const mockDismiss = jest.fn()
  const mockSave = jest.fn()

  it('should render', () => {
    const { toJSON } = render(
      <EditResponse
        isVisible={true}
        customerResp="Lorem ipsium"
        ownerResp="Thanks for submitting your response but we dont value your time nor have interest to give you adequate feedback"
        onDismiss={mockFn}
        onEdit={mockFn}
        ratings={4}
      />,
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('should save with all inputs', () => {
    const { getByTestId } = render(
      <EditResponse
        isVisible={true}
        customerResp={''}
        ownerResp={''}
        onDismiss={mockDismiss}
        onEdit={mockSave}
        ratings={MOCK_RATINGS}
      />,
    )
    fireEvent.changeText(getByTestId('customerRespId'), MOCK_CUSTOMER_RESPONSE)
    fireEvent.changeText(getByTestId('ownerRespId'), MOCK_OWNER_RESPONSE)
    fireEvent.press(getByTestId('save'))
    expect(mockSave).toBeCalled()
  })
})
