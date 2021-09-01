import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'

import AppNoInternet from './component'

describe('AppNoInternet', () => {
  it('should render', () => {
    const { toJSON } = render(<AppNoInternet />)
    expect(toJSON()).toMatchSnapshot()
  })
})
