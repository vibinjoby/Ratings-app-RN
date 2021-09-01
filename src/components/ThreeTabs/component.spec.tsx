import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'

import ThreeTabs from './component'

describe('ThreeTabs', () => {
  const mockFn = jest.fn()

  it('should render', () => {
    const { toJSON } = render(
      <ThreeTabs
        selectedTab={0}
        tab1Text="Customer"
        tab2Text="Owner"
        tab3Text="Admin"
        onTabSelect={mockFn}
      />,
    )
    expect(toJSON()).toMatchSnapshot()
  })
})
