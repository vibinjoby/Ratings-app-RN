import React from 'react'
import { storiesOf } from '@storybook/react-native'
import AppStars from './component'

import Colors from '../../utilities/colors'

export const Story = () => (
  <AppStars
    selectedColor={Colors.golden}
    selectable={false}
    selectedStars={3}
    onSelection={() => console.log('selected')}
    starHeight={15}
  />
)

storiesOf('Components', module).add('Stars', () => <Story />)

export default {
  title: 'AppStars',
}
