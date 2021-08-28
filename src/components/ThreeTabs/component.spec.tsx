import 'react-native'
import React from 'react'
import ThreeTabs from './component'

import { render } from '@testing-library/react-native'

describe('ThreeTabs', () => {
  const mockFn = jest.fn()

  it('should render', () => {
    render(
      <ThreeTabs
        selectedTab={0}
        tab1Text="Customer"
        tab2Text="Owner"
        tab3Text="Admin"
        onTabSelect={mockFn}
      />,
    )
  })
})
