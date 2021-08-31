import 'react-native'
import React from 'react'
import OwnerReply from './component'

import { render } from '@testing-library/react-native'

describe('OwnerReply', () => {
  it('should render', () => {
    render(<OwnerReply owner_reply="Hey sorry that we couldn't meet your expectations" />)
  })
})
