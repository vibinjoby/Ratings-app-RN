import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'

import ThreeTabs from './component'

describe('ThreeTabs', () => {
  const mockFn = jest.fn()
  const SELECTED_TAB = 0
  const TAB1TEXT = 'Customer'
  const TAB2TEXT = 'Owner'
  const TAB3TEXT = 'Admin'

  it('should render', () => {
    const { toJSON } = render(
      <ThreeTabs
        selectedTab={SELECTED_TAB}
        tab1Text={TAB1TEXT}
        tab2Text={TAB2TEXT}
        tab3Text={TAB3TEXT}
        onTabSelect={mockFn}
      />,
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('should be selectable and render all the tab text', () => {
    const { getByTestId } = render(
      <ThreeTabs
        selectedTab={SELECTED_TAB}
        tab1Text={TAB1TEXT}
        tab2Text={TAB2TEXT}
        tab3Text={TAB3TEXT}
        onTabSelect={mockFn}
      />,
    )

    expect(getByTestId('tab1Txt').props.children).toBe(TAB1TEXT)
    expect(getByTestId('tab2Txt').props.children).toBe(TAB2TEXT)
    expect(getByTestId('tab3Txt').props.children).toBe(TAB3TEXT)

    fireEvent.press(getByTestId('leftTab'))
    fireEvent.press(getByTestId('middleTab'))
    fireEvent.press(getByTestId('rightTab'))
  })
})
