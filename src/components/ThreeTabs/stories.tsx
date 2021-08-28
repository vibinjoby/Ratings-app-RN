import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { StyleSheet, View } from 'react-native'

import ThreeTabs from './component'
import { useState } from 'react'

const Component = () => {
  const [selectedTab, setSelectedTab] = useState(0)
  return (
    <View style={styles.container}>
      <ThreeTabs
        selectedTab={selectedTab}
        tab1Text="Customer"
        tab2Text="Owner"
        tab3Text="Admin"
        onTabSelect={(tab) => setSelectedTab(tab)}
      />
    </View>
  )
}

storiesOf('Components', module).add('ThreeTabs', () => <Component />)

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: 20,
  },
})
