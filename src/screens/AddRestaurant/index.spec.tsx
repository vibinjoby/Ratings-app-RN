import 'react-native'
import React from 'react'
import AddRestaurant from '.'

import { render } from '@testing-library/react-native'

describe('AddRestaurant', () => {
    it('should render', () => {
        render(<AddRestaurant />)
    })
})