---
to: src/components/<%= name %>/component.spec.tsx
---
import 'react-native'
import React from 'react'
import <%= name %> from './component'

import { render } from '@testing-library/react-native'

describe('<%= name %>', () => {
    it('should render', () => {
        render(<<%= name %> />)
    })
})