import React from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Colors from '../../utilities/colors'
import styles from './styles'

export interface StarsProps {
  selectable?: boolean
  selectedStars: number
  selectedColor?: string
  starHeight?: number
  spacing?: Record<string, unknown>
  onSelection?: (arg0: number) => void
  customStyle?: Record<string, unknown>
}

const Stars: React.FC<StarsProps> = ({
  selectable,
  selectedStars = 1,
  selectedColor,
  starHeight,
  spacing,
  onSelection,
}: StarsProps) => {
  return (
    <FlatList
      data={[1, 2, 3, 4, 5]}
      scrollEnabled={false}
      horizontal={true}
      renderItem={({ index }) => (
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => selectable && onSelection && onSelection(index + 1)}
        >
          <FontAwesome
            testID={'font-icon'}
            name={selectedStars > index && selectedStars < index + 1 ? `star-half-full` : `star`}
            color={selectedStars > index && selectedStars ? selectedColor : Colors.unselectedStars}
            size={starHeight ? starHeight : 20}
          />
        </TouchableOpacity>
      )}
      ItemSeparatorComponent={() => <View style={[styles.starSpacing, spacing]} />}
      keyExtractor={(_, index) => index.toString()}
    />
  )
}

export default Stars
