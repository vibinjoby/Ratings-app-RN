import 'react-native'
import React from 'react'
import SocialMediaButton from './component'

import { render } from '@testing-library/react-native'

describe('SocialMediaButton', () => {
  it('should render', () => {
    render(
      <SocialMediaButton
        mediaText="Continue with Google"
        mediaType="google"
        onPress={() => console.log('pressed')}
      />,
    )
  })
})
