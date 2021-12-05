import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import AppTabs from './component'

export const Component = () => {
  const [selectedTab, setSelectedTab] = useState(0)
  return (
    <>
      <View style={styles.container}>
        <AppTabs
          selectedTab={selectedTab}
          tabs={['Customer', 'Owner', 'Admin']}
          onPress={(tab) => setSelectedTab(tab)}
        />
      </View>
      <View style={styles.container}>
        <AppTabs
          selectedTab={selectedTab}
          tabs={['Customer', 'Owner']}
          onPress={(tab) => setSelectedTab(tab)}
        />
      </View>
    </>
  )
}

storiesOf('Components', module).add('AppTabs', () => <Component />)

export default {
  title: 'AppTabs',
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: 20,
  },
})
