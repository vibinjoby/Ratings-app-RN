import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import MaterialCommIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Colors from '../../../../utilities/colors'
import { ContentType } from '../../types'
import styles from '../styles'

const Content = ({ title, img, subHead, onPress }: ContentType) => (
  <TouchableOpacity style={styles.contentWrapper} activeOpacity={0.7} onPress={onPress}>
    <Image source={img} />
    <Text style={styles.title}>{title}</Text>
    <View style={styles.subheadWrapper}>
      <Text style={styles.subhead}>{subHead}</Text>
      <MaterialCommIcons
        name="chevron-right"
        size={40}
        color={Colors.black}
        style={styles.chevron}
      />
    </View>
  </TouchableOpacity>
)

export default React.memo(Content)
