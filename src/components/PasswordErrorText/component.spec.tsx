import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'

import PasswordErrorText from './component'

describe('PasswordErrorText', () => {
  it('should render', () => {
    const { toJSON } = render(<PasswordErrorText inputValue="" />)
    expect(toJSON()).toMatchSnapshot()
  })
})
