import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import commons from '../../configs/commonConst'

export interface UsersProps {
  id: string
  name: string
  typeOfUser: string
  onDelete: (arg0: string) => void
}

const Users: React.FC<UsersProps> = ({ id, name, typeOfUser, onDelete }: UsersProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.userPic} source={{ uri: commons.DUMMY_PIC }} />
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.userType}>{typeOfUser}</Text>
      </View>
      <TouchableOpacity activeOpacity={0.9} onPress={() => onDelete(id)} style={styles.deleteIc}>
        <Image source={require('../../assets/deleteIc/deleteIc.png')} />
      </TouchableOpacity>
    </View>
  )
}

export default Users
