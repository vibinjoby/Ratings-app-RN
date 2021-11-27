import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'

import OwnerReply from './component'

describe('OwnerReply', () => {
  const MOCK_REPLY = "Hey sorry that we couldn't meet your expectations"

  it('should render', () => {
    const { toJSON } = render(<OwnerReply ownerReply={MOCK_REPLY} />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('should render reply', () => {
    const { getByTestId } = render(<OwnerReply ownerReply={MOCK_REPLY} />)
    expect(getByTestId('ownerTitle').props.children).toBe('Business Owner')
    expect(getByTestId('ownerReply').props.children).toBe(MOCK_REPLY)
  })
})
