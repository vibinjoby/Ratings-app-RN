import React, { useState } from 'react'
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

import styles from './styles'

export interface ReplyReviewProps {
  _id: string
  onSend: (arg0: string, arg1: string) => void
}

const ReplyReview: React.FC<ReplyReviewProps> = ({ _id, onSend }: ReplyReviewProps) => {
  const [inputVal, setInputVal] = useState('')
  return (
    <View style={styles.container}>
      <View style={styles.replyWrapper}>
        <TextInput
          value={inputVal}
          placeholder="Type Reply..."
          style={styles.textInp}
          onChangeText={(text) => setInputVal(text)}
        />
      </View>
      <TouchableOpacity activeOpacity={0.7} onPress={() => onSend(inputVal, _id)}>
        <Image source={require('../../assets/send/send.png')} />
      </TouchableOpacity>
    </View>
  )
}

export default ReplyReview
