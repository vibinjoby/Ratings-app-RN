import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { storiesOf } from '@storybook/react-native'

import SignUp from '../containers'
import { WithNavigationAndApolloProvider } from '../../../../utilities/hooks'

export default {
  title: 'SignUp',
  component: SignUp,
} as ComponentMeta<typeof SignUp>

export const AuthSignUp: ComponentStory<typeof SignUp> = () => <SignUp />

storiesOf('Screens', module).add('SignUp', () => WithNavigationAndApolloProvider(SignUp))
