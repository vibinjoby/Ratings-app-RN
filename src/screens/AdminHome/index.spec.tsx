import 'react-native'
import React from 'react'
import AdminHome from '.'

import { render } from '@testing-library/react-native'

describe('AdminHome', () => {
    it('should render', () => {
        render(<AdminHome />)
    })
})