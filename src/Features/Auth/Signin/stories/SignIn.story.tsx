import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { storiesOf } from '@storybook/react-native'

import SignIn from '../containers'
import { WithNavigationAndApolloProvider } from '../../../../utilities/hooks'

export default {
  title: 'SignIn',
  component: SignIn,
} as ComponentMeta<typeof SignIn>

export const AuthSignIn: ComponentStory<typeof SignIn> = () => <SignIn />

storiesOf('Screens', module).add('SignIn', () => WithNavigationAndApolloProvider(SignIn))
