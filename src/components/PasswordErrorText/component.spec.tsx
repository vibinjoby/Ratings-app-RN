import 'react-native'
import React from 'react'
import PasswordErrorText from './component'

import { render } from '@testing-library/react-native'

describe('PasswordErrorText', () => {
  it('should render', () => {
    render(<PasswordErrorText />)
  })
})
