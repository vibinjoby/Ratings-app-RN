import React from 'react'
import { useState } from 'react'
import { Text, FlatList, Image, TouchableOpacity, View } from 'react-native'

import styles from './styles'

export interface ThreeVerticalDotsProps {
  testID?: string
  displayDatas: Array<string>
  onOptionPress?: (arg0: number) => void
}

const ThreeVerticalDots: React.FC<ThreeVerticalDotsProps> = ({
  testID,
  displayDatas,
  onOptionPress,
}: ThreeVerticalDotsProps) => {
  const [isPressed, setIsPressed] = useState(false)

  const togglePress = () => setIsPressed((val) => !val)

  const ThreeDots = () => (
    <TouchableOpacity testID={testID} onPress={togglePress} style={styles.threeDotWrapper}>
      <Image source={require('../../assets/moreIc/moreIc.png')} />
    </TouchableOpacity>
  )

  const onOptionSelected = (index: number) => {
    togglePress()
    onOptionPress && onOptionPress(index)
  }

  const DropDown = () => (
    <View style={styles.dropdwnWrapper}>
      <FlatList
        data={displayDatas}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            testID={`option ${index}`}
            activeOpacity={0.7}
            onPress={() => onOptionSelected(index)}
          >
            <Text style={styles.text}>{item}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.spacing} />}
      />
    </View>
  )

  return (
    <View style={styles.container}>
      {isPressed && <DropDown />}
      <ThreeDots />
    </View>
  )
}

export default ThreeVerticalDots
