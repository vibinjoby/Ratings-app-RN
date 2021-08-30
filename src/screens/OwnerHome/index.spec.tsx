import 'react-native'
import React from 'react'
import OwnerHome from '.'

import { render } from '@testing-library/react-native'

describe('OwnerHome', () => {
    it('should render', () => {
        render(<OwnerHome />)
    })
})