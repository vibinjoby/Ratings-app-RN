import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'

import ThreeVerticalDots from './component'

describe('ThreeVerticalDots', () => {
  it('should render', () => {
    const { toJSON } = render(
      <ThreeVerticalDots displayDatas={['Delete Review', 'Edit Response']} />,
    )
    expect(toJSON()).toMatchSnapshot()
  })
})
