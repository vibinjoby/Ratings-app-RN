import 'react-native'
import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'

import Stars from './component'
import Colors from '../../utilities/colors'

describe('Stars', () => {
  const mockFn = jest.fn()

  it('should render', () => {
    const { toJSON } = render(
      <Stars
        selectedColor={Colors.golden}
        selectable={false}
        selectedStars={3}
        onSelection={mockFn}
        starHeight={15}
      />,
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('should render all 5 stars', () => {
    const { getByTestId } = render(
      <Stars
        selectedColor={Colors.golden}
        selectable={false}
        selectedStars={3.5}
        onSelection={mockFn}
        starHeight={15}
      />,
    )
    expect(getByTestId('font-icon 0')).toBeDefined()
    expect(getByTestId('font-icon 1')).toBeDefined()
    expect(getByTestId('font-icon 2')).toBeDefined()
    expect(getByTestId('font-icon 3')).toBeDefined()
    expect(getByTestId('font-icon 4')).toBeDefined()
  })

  it('should be clickable when selected', () => {
    const { getByTestId } = render(
      <Stars
        selectedColor={Colors.golden}
        selectable={true}
        selectedStars={3.5}
        onSelection={mockFn}
        starHeight={15}
        testID="stars"
      />,
    )
    fireEvent.press(getByTestId('stars0'))
    expect(mockFn).toBeCalled()
  })
})
