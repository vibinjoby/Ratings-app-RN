import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'

import SocialMediaButton from './component'

describe('SocialMediaButton', () => {
  const MOCK_FN = jest.fn()
  const MOCK_MEDIA_TEXT = 'Continue with Google'
  const MOCK_FB_MEDIA_TYPE = 'fb'
  const MOCK_GOOGLE_MEDIA_TYPE = 'google'
  const GOOGLE_URI = require('../../assets/googleIcon/googleIcon.png')
  const FB_URI = require('../../assets/facebookIcon/facebookIcon.png')

  it('should render', () => {
    const { toJSON } = render(
      <SocialMediaButton
        mediaText={MOCK_MEDIA_TEXT}
        mediaType={MOCK_GOOGLE_MEDIA_TYPE}
        onPress={MOCK_FN}
      />,
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('should render google button', () => {
    const { getByTestId } = render(
      <SocialMediaButton
        testID="gBtn"
        mediaText={MOCK_MEDIA_TEXT}
        mediaType={MOCK_GOOGLE_MEDIA_TYPE}
        onPress={MOCK_FN}
      />,
    )
    expect(getByTestId('mediaImg').props.source).toBe(GOOGLE_URI)
    fireEvent.press(getByTestId('gBtn'))
    expect(MOCK_FN).toBeCalled()
  })

  it('should render facebook button', () => {
    const { getByTestId } = render(
      <SocialMediaButton
        testID="fbBtn"
        mediaText={MOCK_MEDIA_TEXT}
        mediaType={MOCK_FB_MEDIA_TYPE}
        onPress={MOCK_FN}
      />,
    )
    expect(getByTestId('mediaImg').props.source).toBe(FB_URI)
    fireEvent.press(getByTestId('fbBtn'))
    expect(MOCK_FN).toBeCalled()
  })
})
