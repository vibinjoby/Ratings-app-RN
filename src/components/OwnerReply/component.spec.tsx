import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'

import OwnerReply from './component'

describe('OwnerReply', () => {
  it('should render', () => {
    const { toJSON } = render(
      <OwnerReply owner_reply="Hey sorry that we couldn't meet your expectations" />,
    )
    expect(toJSON()).toMatchSnapshot()
  })
})
