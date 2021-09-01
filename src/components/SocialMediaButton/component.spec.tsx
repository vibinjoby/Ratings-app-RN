import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'

import SocialMediaButton from './component'

describe('SocialMediaButton', () => {
  it('should render', () => {
    const { toJSON } = render(
      <SocialMediaButton
        mediaText="Continue with Google"
        mediaType="google"
        onPress={() => console.log('pressed')}
      />,
    )
    expect(toJSON()).toMatchSnapshot()
  })
})
