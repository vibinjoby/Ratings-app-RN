import 'react-native'
import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'

import OwnerRestaurantCard from './component'

describe('OwnerRestaurantCard', () => {
  const MOCK_PRESS = jest.fn()
  const MOCK_TITLE = 'Moxies Grill & Bar'
  const MOCK_RATINGS = 4
  const MOCK_REVIEWS_COUNT = 4

  it('should render', () => {
    const { toJSON } = render(
      <OwnerRestaurantCard
        title={MOCK_TITLE}
        ratings={MOCK_REVIEWS_COUNT}
        reviewsCount={MOCK_RATINGS}
        onPress={MOCK_PRESS}
      />,
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('should render all values', () => {
    const { getByTestId } = render(
      <OwnerRestaurantCard
        testID="card"
        title={MOCK_TITLE}
        ratings={MOCK_REVIEWS_COUNT}
        reviewsCount={MOCK_RATINGS}
        onPress={MOCK_PRESS}
      />,
    )
    expect(getByTestId('title').props.children).toBe(MOCK_TITLE)
    expect(getByTestId('ratings').props.children).toBe(MOCK_RATINGS)
  })

  it('should be clickable', () => {
    const { getByTestId } = render(
      <OwnerRestaurantCard
        testID="card"
        title={MOCK_TITLE}
        ratings={MOCK_REVIEWS_COUNT}
        reviewsCount={MOCK_RATINGS}
        onPress={MOCK_PRESS}
      />,
    )
    fireEvent.press(getByTestId('card'))
    expect(MOCK_PRESS).toBeCalled()
  })
})
