import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Colors from '../../utilities/colors'

import styles from './styles'

export interface ButtonProps {
  testID?: string
  title: string
  buttonColor?: string
  textColor?: string
  customStyle?: Record<string, unknown>
  disabled?: boolean
  onPress: () => void
}

const Button: React.FC<ButtonProps> = ({
  testID,
  title,
  customStyle,
  buttonColor,
  textColor,
  disabled,
  onPress,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.8}
      testID={testID}
      style={[
        styles.container,
        buttonColor ? { backgroundColor: buttonColor } : {},
        customStyle,
        disabled ? { backgroundColor: Colors.borderColor } : {},
      ]}
    >
      <Text style={[styles.btnTxt, textColor ? { color: textColor } : {}]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button
