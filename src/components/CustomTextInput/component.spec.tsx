import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'

import CustomTextInput from './component'

describe('CustomTextInput', () => {
  it('should render', () => {
    const { toJSON } = render(
      <CustomTextInput
        testID="items"
        key={''}
        onBlur={() => console.log('blurred')}
        onFocus={() => console.log('validate form')}
        onChangeText={() => console.log('onchange text')}
        touched={{ key: false }}
        name={'textinput'}
        errors={{ key: 'errors' }}
      />,
    )
    expect(toJSON()).toMatchSnapshot()
  })
})
