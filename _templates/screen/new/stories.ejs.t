---
to: src/screens/<%= name %>/stories.tsx
---
import React from 'react'
import { storiesOf } from '@storybook/react-native'
import <%= name %> from '.'

storiesOf('Screens',module).add('<%= name %>', () => <<%= name %> />)