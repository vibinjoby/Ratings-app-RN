import 'react-native'
import React from 'react'
import ModalPopup from './component'

import { render } from '@testing-library/react-native'

describe('ModalPopup', () => {
    it('should render', () => {
        render(<ModalPopup />)
    })
})