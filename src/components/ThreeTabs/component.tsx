import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './styles'

export interface ThreeTabsProps {
  tab1Text: string
  tab2Text: string
  tab3Text: string
  selectedTab: number
  onTabSelect: (arg0: number) => void
}

const ThreeTabs: React.FC<ThreeTabsProps> = ({
  tab1Text,
  tab2Text,
  tab3Text,
  selectedTab,
  onTabSelect,
}: ThreeTabsProps) => {
  const LeftTab = () => (
    <TouchableOpacity onPress={() => onTabSelect(0)} activeOpacity={0.7}>
      <View style={[styles.leftTab, styles.tabs, selectedTab === 0 && styles.selectedTab]}>
        <Text style={[styles.tabTxt, selectedTab === 0 && styles.selectedTabText]}>{tab1Text}</Text>
      </View>
    </TouchableOpacity>
  )
  const MiddleTab = () => (
    <TouchableOpacity onPress={() => onTabSelect(1)} activeOpacity={0.7}>
      <View style={[styles.middleTab, styles.tabs, selectedTab === 1 && styles.selectedTab]}>
        <Text style={[styles.tabTxt, selectedTab === 1 && styles.selectedTabText]}>{tab2Text}</Text>
      </View>
    </TouchableOpacity>
  )
  const RightTab = () => (
    <TouchableOpacity onPress={() => onTabSelect(2)} activeOpacity={0.7}>
      <View style={[styles.rightTab, styles.tabs, selectedTab === 2 && styles.selectedTab]}>
        <Text style={[styles.tabTxt, selectedTab === 2 && styles.selectedTabText]}>{tab3Text}</Text>
      </View>
    </TouchableOpacity>
  )
  return (
    <View style={styles.container}>
      <LeftTab />
      <MiddleTab />
      <RightTab />
    </View>
  )
}

export default ThreeTabs
