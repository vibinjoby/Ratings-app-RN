import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'

import TwoTabs from './component'

describe('TwoTabs', () => {
  const mockFn = jest.fn()

  it('should render', () => {
    const { toJSON } = render(
      <TwoTabs selectedTab={0} tab1Text="Customer" tab2Text="Owner" onTabSelect={mockFn} />,
    )
    expect(toJSON()).toMatchSnapshot()
  })
})
