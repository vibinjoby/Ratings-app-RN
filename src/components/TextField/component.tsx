import React from 'react'
import { useState } from 'react'
import { View, TextInput, Text, Image, TouchableOpacity } from 'react-native'

import styles from './styles'

export interface TextFieldProps {
  testID?: string
  containerStyle?: Record<string, unknown>
  textHint: string
  inputValue: string
  isProtected?: boolean
  onInputChange: (arg0: string) => void
}

const TextField: React.FC<TextFieldProps> = ({
  testID,
  containerStyle,
  textHint,
  inputValue,
  isProtected,
  onInputChange,
}: TextFieldProps) => {
  const [showPwd, setShowPwd] = useState(isProtected)

  return (
    <View style={containerStyle}>
      <Text style={styles.textHint}>{textHint}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          testID={testID}
          value={inputValue}
          autoCapitalize={'none'}
          secureTextEntry={showPwd}
          onChangeText={onInputChange}
          style={styles.inputText}
        />
        {isProtected && (
          <TouchableOpacity
            testID="eyeIc"
            activeOpacity={0.9}
            style={styles.passwordEye}
            onPress={() => setShowPwd((val) => !val)}
          >
            <Image source={require('../../assets/password/password.png')} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default TextField
