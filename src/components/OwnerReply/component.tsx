import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './styles'

export interface OwnerReplyProps {
  ownerReply: string
}

const OwnerReply: React.FC<OwnerReplyProps> = ({ ownerReply }: OwnerReplyProps) => {
  return (
    <View style={styles.ownerWrapper}>
      <View style={styles.ownerTitleWrapper}>
        <Image source={require('../../assets/guest-pic.png')} style={styles.ownerPic} />
        <Text testID="ownerTitle" style={styles.ownerTitle}>
          Business Owner
        </Text>
      </View>
      {}
      <Text testID="ownerReply">{ownerReply}</Text>
    </View>
  )
}

export default OwnerReply
