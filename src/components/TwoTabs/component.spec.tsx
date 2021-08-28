import 'react-native'
import React from 'react'
import TwoTabs from './component'

import { render } from '@testing-library/react-native'

describe('TwoTabs', () => {
  const mockFn = jest.fn()

  it('should render', () => {
    render(<TwoTabs selectedTab={0} tab1Text="Customer" tab2Text="Owner" onTabSelect={mockFn} />)
  })
})
