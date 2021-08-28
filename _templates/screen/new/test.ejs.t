---
to: src/screens/<%= name %>/index.spec.tsx
---
import 'react-native'
import React from 'react'
import <%= name %> from '.'

import { render } from '@testing-library/react-native'

describe('<%= name %>', () => {
    it('should render', () => {
        render(<<%= name %> />)
    })
})