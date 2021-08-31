import 'react-native'
import React from 'react'
import ReplyReview from './component'

import { render } from '@testing-library/react-native'

describe('ReplyReview', () => {
  it('should render', () => {
    render(<ReplyReview _id="123" onSend={(a, b) => console.log('send')} />)
  })
})
