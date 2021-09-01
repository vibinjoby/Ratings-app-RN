import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'

import ModalPopup from './component'

describe('ModalPopup', () => {
  it('should render', () => {
    const { toJSON } = render(
      <ModalPopup
        isVisible={false}
        content="Are you sure you want to delete this user"
        positiveBtnTxt="Yes"
        negativeBtnTxt="No"
        onPositiveBtnPress={() => console.log('positive btn pressed')}
        onNegativeBtnPress={() => console.log('negative pressed')}
      />,
    )

    expect(toJSON()).toMatchSnapshot()
  })
})
