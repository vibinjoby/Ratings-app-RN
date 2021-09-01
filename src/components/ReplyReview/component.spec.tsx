import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'

import ReplyReview from './component'

describe('ReplyReview', () => {
  it('should render', () => {
    const { toJSON } = render(<ReplyReview _id="123" onSend={() => console.log('send')} />)
    expect(toJSON()).toMatchSnapshot()
  })
})
