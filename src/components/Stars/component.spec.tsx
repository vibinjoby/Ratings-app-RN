import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'

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
})
