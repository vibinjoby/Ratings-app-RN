import React from 'react'
import { FlatList, TouchableWithoutFeedback, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Colors from '../../utilities/colors'
import styles from './styles'

export interface StarsProps {
  selectable?: boolean
  selectedStars: number
  selectedColor?: string
  starHeight?: number
  onSelection?: (arg0: number) => void
}

const Stars: React.FC<StarsProps> = ({
  selectable,
  selectedStars = 1,
  selectedColor,
  starHeight,
  onSelection,
}: StarsProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        scrollEnabled={false}
        horizontal={true}
        renderItem={({ item, index }) => (
          <TouchableWithoutFeedback
            onPress={() => selectable && onSelection && onSelection(index + 1)}
          >
            <FontAwesome
              name={`star`}
              color={index + 1 <= selectedStars ? selectedColor : Colors.unselectedStars}
              size={starHeight ? starHeight : 20}
            />
          </TouchableWithoutFeedback>
        )}
        ItemSeparatorComponent={() => <View style={styles.starSpacing} />}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  )
}

export default Stars
