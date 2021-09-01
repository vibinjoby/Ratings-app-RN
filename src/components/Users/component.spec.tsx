import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'

import Users from './component'

describe('Users', () => {
  it('should render', () => {
    const { toJSON } = render(
      <Users id="" name="" typeOfUser="" onDelete={() => console.log('deleted')} />,
    )
    expect(toJSON()).toMatchSnapshot()
  })
})
