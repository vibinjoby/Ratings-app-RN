import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import styles from '../styles/UserRow'
import commons from '../../../../configs/constants'

export interface UserRowProps {
  id: number
  name: string
  typeOfUser: string
  onDelete: (arg0: number) => void
  index?: number
}

const UserRow: React.FC<UserRowProps> = ({
  id,
  name,
  typeOfUser,
  onDelete,
  index,
}: UserRowProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.userPic} source={{ uri: commons.DUMMY_PIC }} />
      <View style={styles.nameContainer}>
        <Text testID="name" style={styles.name}>
          {name}
        </Text>
        <Text testID="userType" style={styles.userType}>
          {typeOfUser}
        </Text>
      </View>
      <TouchableOpacity
        testID={`deleteIc${index}`}
        activeOpacity={0.9}
        onPress={() => onDelete(id)}
        style={styles.deleteIc}
      >
        <Image source={require('../../../../assets/deleteIc/deleteIc.png')} />
      </TouchableOpacity>
    </View>
  )
}

export default UserRow
