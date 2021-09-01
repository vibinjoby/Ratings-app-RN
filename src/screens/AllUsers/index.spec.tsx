import 'react-native'
import React from 'react'
import AllUsers from '.'

import { render } from '@testing-library/react-native'

describe('AllUsers', () => {
    it('should render', () => {
        render(<AllUsers />)
    })
})