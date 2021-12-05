import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'

import AppToasts from './component'

describe('AppToasts', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  it('should render', () => {
    const { toJSON } = render(<AppToasts isError={false} toastMessage="Toast message" />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('should show toast message', () => {
    const { getByText } = render(<AppToasts isError={false} toastMessage="Toast message" />)

    getByText('Toast message')
  })
})
