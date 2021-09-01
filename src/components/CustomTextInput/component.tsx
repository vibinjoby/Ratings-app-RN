import React, { useState } from 'react'
import { View, Image, TextInput, TouchableWithoutFeedback, KeyboardType, Text } from 'react-native'
import * as Animatable from 'react-native-animatable'
import Colors from '../../utilities/colors'

import PasswordErrorTxt from '../PasswordErrorText'
import styles from './styles'

export interface CustomTextInputProps {
  testID: string
  onChangeText: (arg0: string) => void
  customStyles?: Record<string, unknown>
  touched: { [key: string]: boolean }
  errors: { [key: string]: string }
  name: string
  onPress?: () => void
  value?: string
  placeholderTxt?: string
  secureTextEntry?: boolean
  autoCapitalize?: boolean
  extraStyle?: Record<string, unknown>
  placeholderTextColor?: string
  keyboardType?: KeyboardType
  onBlur?: () => void
  onFocus?: () => void
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  testID,
  onChangeText,
  customStyles,
  touched,
  errors,
  name,
  keyboardType,
  value,
  placeholderTxt,
  secureTextEntry,
  autoCapitalize,
  extraStyle,
}) => {
  const [isLabelVisible, setIsLabelVisible] = useState(false)
  const [isHidePwd, setIsHidePwd] = useState(secureTextEntry)
  const [inputValue, setInputValue] = useState('')
  const [isPasswordFocussed, setIsPasswordFocussed] = useState(false)

  return (
    <View style={customStyles}>
      <View style={styles.container}>
        {isLabelVisible && (
          <Animatable.Text
            style={[styles.placeholder, touched[name] && errors[name] ? styles.err : {}]}
          >
            {placeholderTxt}
          </Animatable.Text>
        )}
        <TextInput
          testID={testID}
          placeholder={placeholderTxt}
          returnKeyType={'done'}
          style={[
            styles.textInput,
            isLabelVisible && {
              borderColor: touched[name] && errors[name] ? Colors.red : Colors.enabledTxtInput,
            },
            extraStyle,
          ]}
          keyboardType={keyboardType}
          secureTextEntry={isHidePwd}
          autoCapitalize={!autoCapitalize ? 'none' : 'words'}
          onChangeText={(text: string) => {
            //If the text is typed move the placeholder to the top as label
            if (text && text !== '') setIsLabelVisible(true)
            else setIsLabelVisible(false)
            onChangeText && onChangeText(text)
            setInputValue(text)
            if (name && name === 'password') setIsPasswordFocussed(true)
            else setIsPasswordFocussed(false)
          }}
          value={value}
        />
      </View>
      {name === 'password' && (
        <TouchableWithoutFeedback onPress={() => setIsHidePwd(!isHidePwd)}>
          <Image
            resizeMode={'contain'}
            source={
              !isHidePwd ? require('../../assets/eye.png') : require('../../assets/eye-off.png')
            }
            style={styles.hidePwd}
          />
        </TouchableWithoutFeedback>
      )}
      {touched && errors[name] && name !== 'password' && (
        <Text style={styles.errTxt}>{errors[name]}</Text>
      )}
      {(isPasswordFocussed || touched[name]) && name === 'password' && (
        <PasswordErrorTxt inputValue={inputValue} />
      )}
    </View>
  )
}

export default CustomTextInput
