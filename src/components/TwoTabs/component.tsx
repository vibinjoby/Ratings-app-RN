import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import styles from './styles'

export interface TwoTabsProps {
  tab1Text: string
  tab2Text: string
  selectedTab: number
  onTabSelect: (arg0: number) => void
}

const TwoTabs: React.FC<TwoTabsProps> = ({
  tab1Text,
  tab2Text,
  selectedTab,
  onTabSelect,
}: TwoTabsProps) => {
  const LeftTab = () => (
    <TouchableOpacity onPress={() => onTabSelect(0)} activeOpacity={0.7}>
      <View style={[styles.leftTab, styles.tabs, selectedTab === 0 && styles.selectedTab]}>
        <Text style={[styles.tabTxt, selectedTab === 0 && styles.selectedTabText]}>{tab1Text}</Text>
      </View>
    </TouchableOpacity>
  )

  const RightTab = () => (
    <TouchableOpacity onPress={() => onTabSelect(1)} activeOpacity={0.7}>
      <View style={[styles.rightTab, styles.tabs, selectedTab === 1 && styles.selectedTab]}>
        <Text style={[styles.tabTxt, selectedTab === 1 && styles.selectedTabText]}>{tab2Text}</Text>
      </View>
    </TouchableOpacity>
  )
  return (
    <View style={styles.container}>
      <LeftTab />
      <RightTab />
    </View>
  )
}

export default TwoTabs
