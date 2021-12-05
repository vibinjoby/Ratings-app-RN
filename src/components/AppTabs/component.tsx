import React from 'react'
import { View, Text, TouchableOpacity, ButtonProps, ViewProps } from 'react-native'

import styles from './styles'

export interface AppTabsProps {
  tabs: string[]
  selectedTab: number
  onPress: (tab: number) => void
}

interface TabProps {
  tabsLength: number
  tabIndex: number
  selectedTab: number
  onPress: ButtonProps['onPress']
  tabText: string
}

const stylesMap: Record<number, ViewProps['style']> = {
  0: styles.leftTab,
  1: styles.middleTab,
  2: styles.rightTab,
}

const testIdMap: Record<number, string> = {
  0: 'left',
  1: 'middle',
  2: 'right',
}

/* If the tab size is 2 and when the tab index is 1 increment it to 2, so that middle tab becomes right tab */
const Tab = ({ tabsLength, tabIndex, selectedTab, onPress, tabText }: TabProps) => {
  const tabMapIndex = tabsLength === 2 && tabIndex === 1 ? tabIndex + 1 : tabIndex
  return (
    <TouchableOpacity testID={`${testIdMap[tabMapIndex]}Tab`} onPress={onPress} activeOpacity={0.7}>
      <View
        style={[
          stylesMap[tabMapIndex],
          styles.tabs,
          selectedTab === tabIndex && styles.selectedTab,
        ]}
      >
        <Text
          testID={`tab${tabIndex + 1}Txt`}
          style={[styles.tabTxt, selectedTab === tabIndex && styles.selectedTabText]}
        >
          {tabText}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const AppTabs: React.FC<AppTabsProps> = ({ tabs, selectedTab, onPress }: AppTabsProps) => (
  <View style={styles.container}>
    {tabs.map((tab, index) => (
      <Tab
        tabsLength={tabs.length}
        tabIndex={index}
        selectedTab={selectedTab}
        key={index}
        tabText={tab}
        onPress={() => onPress(index)}
      />
    ))}
  </View>
)

export default AppTabs
