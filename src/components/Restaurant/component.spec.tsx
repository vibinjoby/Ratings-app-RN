import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'

import Restaurant from './component'

describe('Restaurant', () => {
  const MOCK_FN = jest.fn()
  const MOCK_RATINGS = 4.5
  const MOCK_TITLE = 'California Roll'

  it('should render', () => {
    const { toJSON } = render(
      <Restaurant
        restaurantName={MOCK_TITLE}
        ratings={MOCK_RATINGS}
        reviewsCount={15}
        onPress={MOCK_FN}
      />,
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('should render all values and be clickable', () => {
    const { getByTestId } = render(
      <Restaurant
        testID="container"
        restaurantName={MOCK_TITLE}
        ratings={MOCK_RATINGS}
        reviewsCount={15}
        onPress={MOCK_FN}
      />,
    )
    expect(getByTestId('ratings').props.children).toBe(MOCK_RATINGS)
    expect(getByTestId('restaurantName').props.children).toBe(MOCK_TITLE)
    // Click action
    fireEvent.press(getByTestId('container'))
    expect(MOCK_FN).toBeCalled()
  })
})
