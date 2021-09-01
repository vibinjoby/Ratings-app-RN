import 'react-native'
import React from 'react'
import Users from './component'

import { render } from '@testing-library/react-native'

describe('Users', () => {
    it('should render', () => {
        render(<Users />)
    })
})