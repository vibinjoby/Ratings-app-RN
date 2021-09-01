import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './styles'

export interface OwnerReplyProps {
  /* eslint-disable camelcase */ owner_reply: string
}
/* eslint-disable camelcase */
const OwnerReply: React.FC<OwnerReplyProps> = ({ owner_reply }: OwnerReplyProps) => {
  return (
    <View style={styles.ownerWrapper}>
      <View style={styles.ownerTitleWrapper}>
        <Image source={require('../../assets/guest-pic.png')} style={styles.ownerPic} />
        <Text style={styles.ownerTitle}>Business Owner</Text>
      </View>
      {/* eslint-disable camelcase */}
      <Text>{owner_reply}</Text>
    </View>
  )
}

export default OwnerReply
