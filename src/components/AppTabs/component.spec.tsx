import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'

import AppTabs from './component'

describe('AppTabs', () => {
  const mockFn = jest.fn()
  const SELECTED_TAB = 0
  const TAB1TEXT = 'Customer'
  const TAB2TEXT = 'Owner'
  const TAB3TEXT = 'Admin'

  it('should render', () => {
    const { toJSON } = render(
      <AppTabs selectedTab={SELECTED_TAB} tabs={[TAB1TEXT, TAB2TEXT, TAB3TEXT]} onPress={mockFn} />,
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('should work for three tabs', () => {
    const { getByTestId } = render(
      <AppTabs selectedTab={SELECTED_TAB} tabs={[TAB1TEXT, TAB2TEXT, TAB3TEXT]} onPress={mockFn} />,
    )

    expect(getByTestId('tab1Txt').props.children).toBe(TAB1TEXT)
    expect(getByTestId('tab2Txt').props.children).toBe(TAB2TEXT)
    expect(getByTestId('tab3Txt').props.children).toBe(TAB3TEXT)

    fireEvent.press(getByTestId('leftTab'))
    fireEvent.press(getByTestId('middleTab'))
    fireEvent.press(getByTestId('rightTab'))
  })

  it('should work for two tabs', () => {
    const { getByTestId } = render(
      <AppTabs selectedTab={SELECTED_TAB} tabs={[TAB1TEXT, TAB2TEXT]} onPress={mockFn} />,
    )

    expect(getByTestId('tab1Txt').props.children).toBe(TAB1TEXT)
    expect(getByTestId('tab2Txt').props.children).toBe(TAB2TEXT)

    fireEvent.press(getByTestId('leftTab'))
    fireEvent.press(getByTestId('rightTab'))
  })
})
