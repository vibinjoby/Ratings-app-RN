import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'

import ModalPopup from './component'

describe('ModalPopup', () => {
  const MOCK_FN = jest.fn()

  it('should render', () => {
    const { toJSON } = render(
      <ModalPopup
        isVisible={false}
        content="Are you sure you want to delete this user"
        positiveBtnTxt="Yes"
        negativeBtnTxt="No"
        onPositiveBtnPress={MOCK_FN}
        onNegativeBtnPress={MOCK_FN}
      />,
    )

    expect(toJSON()).toMatchSnapshot()
  })

  it('should be visible', () => {
    const { getByTestId } = render(
      <ModalPopup
        testID="modal"
        isVisible={true}
        content="Are you sure you want to delete this user"
        positiveBtnTxt="Yes"
        negativeBtnTxt="No"
        onPositiveBtnPress={MOCK_FN}
        onNegativeBtnPress={MOCK_FN}
      />,
    )

    expect(getByTestId('modal').props).toHaveProperty('visible', true)
  })

  it('should not be visible', () => {
    const { getByTestId } = render(
      <ModalPopup
        testID="modal"
        isVisible={false}
        content="Are you sure you want to delete this user"
        positiveBtnTxt="Yes"
        negativeBtnTxt="No"
        onPositiveBtnPress={MOCK_FN}
        onNegativeBtnPress={MOCK_FN}
      />,
    )

    expect(getByTestId('modal').props).toHaveProperty('visible', false)
  })
})
