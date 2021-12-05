import React from 'react'
import { storiesOf } from '@storybook/react-native'
import Stars from './component'

import Colors from '../../utilities/colors'

storiesOf('Components', module).add('Stars', () => (
  <Stars
    selectedColor={Colors.golden}
    selectable={false}
    selectedStars={3}
    onSelection={() => console.log('selected')}
    starHeight={15}
  />
))
