import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'

import ThreeVerticalDots from './component'

describe('ThreeVerticalDots', () => {
  const MOCK_DATAS = ['Delete Review', 'Edit Response']
  const MOCK_FN = jest.fn()

  it('should render', () => {
    const { toJSON } = render(<ThreeVerticalDots displayDatas={MOCK_DATAS} />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('should be able to click on the dots', () => {
    const { getByTestId } = render(
      <ThreeVerticalDots testID="threeDots" displayDatas={MOCK_DATAS} onOptionPress={MOCK_FN} />,
    )
    expect(getByTestId('threeDots')).toBeDefined()
    fireEvent.press(getByTestId('threeDots'))
  })

  it('should be able to select the options after clicking the dots', () => {
    const { getByTestId } = render(
      <ThreeVerticalDots testID="threeDots" displayDatas={MOCK_DATAS} onOptionPress={MOCK_FN} />,
    )
    expect(getByTestId('threeDots')).toBeDefined()
    fireEvent.press(getByTestId('threeDots'))

    fireEvent.press(getByTestId('option 0'))
    expect(MOCK_FN).toBeCalledWith(0)
  })
})
