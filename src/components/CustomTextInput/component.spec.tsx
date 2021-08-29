import 'react-native'
import React from 'react'
import CustomTextInput from './component'

import { render } from '@testing-library/react-native'

describe('CustomTextInput', () => {
  it('should render', () => {
    render(<CustomTextInput />)
  })
})
