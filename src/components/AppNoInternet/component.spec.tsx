import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'

import AppNoInternet from './component'

describe('AppNoInternet', () => {
  it('should render', () => {
    const { toJSON } = render(<AppNoInternet isConnected={false} />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('should show modal when not connected to internet', () => {
    const { getByText } = render(<AppNoInternet isConnected={false} />)
    getByText('You are not connected to the Internet')
  })
})
