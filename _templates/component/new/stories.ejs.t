---
to: src/components/<%= name %>/stories.tsx
---
import React from 'react'
import { storiesOf } from '@storybook/react-native'
import <%= name %> from './component'

storiesOf('Components',module).add('<%= name %>', () => <<%= name %> />)