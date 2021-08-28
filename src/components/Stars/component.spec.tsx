import 'react-native'
import React from 'react'
import Stars from './component'

import { render } from '@testing-library/react-native'
import Colors from '../../utilities/colors'

describe('Stars', () => {
  const mockFn = jest.fn()

  it('should render', () => {
    render(
      <Stars
        selectedColor={Colors.golden}
        selectable={false}
        selectedStars={3}
        onSelection={mockFn}
        starHeight={15}
      />,
    )
  })
})
