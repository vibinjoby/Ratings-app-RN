import React from 'react'
import { storiesOf } from '@storybook/react-native'
import Users from './component'

storiesOf('Components', module).add('Users', () => (
  <Users
    id={''}
    name={'vibin'}
    typeOfUser={'customer'}
    onDelete={() => console.log('delete clicked')}
  />
))
