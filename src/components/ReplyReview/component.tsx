import React, { useState } from 'react'
import { Image, TextInput, TouchableOpacity, View } from 'react-native'

import styles from './styles'

export interface ReplyReviewProps {
  _id: number
  onSend: (arg0: string, arg1: number) => void
}

const ReplyReview: React.FC<ReplyReviewProps> = ({ _id, onSend }: ReplyReviewProps) => {
  const [inputVal, setInputVal] = useState('')
  return (
    <View style={styles.container}>
      <View style={styles.replyWrapper}>
        <TextInput
          autoFocus
          testID="replyInput"
          value={inputVal}
          placeholder="Type Reply..."
          style={styles.textInp}
          onChangeText={(text) => setInputVal(text)}
        />
      </View>
      <TouchableOpacity testID="sendBtn" activeOpacity={0.7} onPress={() => onSend(inputVal, _id)}>
        <Image source={require('../../assets/send/send.png')} />
      </TouchableOpacity>
    </View>
  )
}

export default ReplyReview
