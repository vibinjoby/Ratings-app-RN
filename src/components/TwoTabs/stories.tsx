import React, { useState } from 'react'
import { storiesOf } from '@storybook/react-native'
import TwoTabs from './component'
import { StyleSheet, View } from 'react-native'

const Component = () => {
  const [selectedTab, setSelectedTab] = useState(0)
  return (
    <View style={styles.container}>
      <TwoTabs
        selectedTab={selectedTab}
        tab1Text="Customer"
        tab2Text="Owner"
        onTabSelect={(tab) => setSelectedTab(tab)}
      />
    </View>
  )
}

storiesOf('Components', module).add('TwoTabs', () => <Component />)

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: 20,
  },
})
