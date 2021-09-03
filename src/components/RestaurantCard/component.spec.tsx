import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native'

import RestaurantCard from './component'

describe('RestaurantCard', () => {
  const MOCK_FN = jest.fn()
  const MOCK_TITLE = 'Joes Pizzeria'
  const MOCK_ID = ''
  const MOCK_IMG = require('../../../src/assets/dummy-restaurant-pic.png')
  const MOCK_RATINGS = 4.4

  it('should render', () => {
    const { toJSON } = render(
      <NavigationContainer>
        <RestaurantCard
          id={MOCK_ID}
          title={MOCK_TITLE}
          restaurantImg={MOCK_IMG}
          ratings={MOCK_RATINGS}
          reviewCount={84}
          onPress={MOCK_FN}
        />
      </NavigationContainer>,
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('should render all values and be clickable', () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <RestaurantCard
          testID="container"
          id={MOCK_ID}
          title={MOCK_TITLE}
          restaurantImg={MOCK_IMG}
          ratings={MOCK_RATINGS}
          reviewCount={84}
          onPress={MOCK_FN}
        />
      </NavigationContainer>,
    )
    expect(getByTestId('ratings').props.children).toBe(MOCK_RATINGS)
    expect(getByTestId('title').props.children).toBe(MOCK_TITLE)
    expect(getByTestId('imgBG').props.source).toBe(MOCK_IMG)
    fireEvent.press(getByTestId('container'))
    expect(MOCK_FN).toBeCalled()
  })
})
