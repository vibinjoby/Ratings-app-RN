import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'

import TwoTabs from './component'

describe('TwoTabs', () => {
  const mockFn = jest.fn()
  const SELECTED_TAB = 0
  const TAB1TEXT = 'Customer'
  const TAB2TEXT = 'Owner'

  it('should render', () => {
    const { toJSON } = render(
      <TwoTabs
        selectedTab={SELECTED_TAB}
        tab1Text={TAB1TEXT}
        tab2Text={TAB2TEXT}
        onTabSelect={mockFn}
      />,
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('should be selectable and render all the tab text', () => {
    const { getByTestId } = render(
      <TwoTabs
        selectedTab={SELECTED_TAB}
        tab1Text={TAB1TEXT}
        tab2Text={TAB2TEXT}
        onTabSelect={mockFn}
      />,
    )
    expect(getByTestId('tab1Txt').props.children).toBe(TAB1TEXT)
    expect(getByTestId('tab2Txt').props.children).toBe(TAB2TEXT)

    fireEvent.press(getByTestId('leftTab'))
    fireEvent.press(getByTestId('rightTab'))
  })
})
