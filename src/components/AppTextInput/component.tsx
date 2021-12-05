import React, { useState } from 'react'
import {
  View,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  TextInputProps,
  ViewProps,
} from 'react-native'

import AppPasswordErrorGroup from '../AppPasswordErrorGroup'
import styles from './styles'

export interface AppTextInputProps extends TextInputProps {
  testID?: TextInputProps['testID']
  containerStyle?: ViewProps['style']
  textHint: string
  inputValue: TextInputProps['value']
  isProtected?: boolean
  onInputChange: TextInputProps['onChangeText']
  isPwdCheck?: boolean
  errorText?: string | null
}

interface ErrorTextProps {
  errorText: string
}

const ErrorText = ({ errorText }: ErrorTextProps) => <Text style={styles.errTxt}>{errorText}</Text>

const AppTextInput: React.FC<AppTextInputProps> = ({
  testID,
  containerStyle,
  textHint,
  inputValue,
  isProtected,
  onInputChange,
  isPwdCheck,
  errorText,
  ...rest
}: AppTextInputProps) => {
  const [showPassword, setShowPassword] = useState(isProtected)

  return (
    <View style={containerStyle}>
      <Text style={styles.textHint}>{textHint}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          testID={testID ?? 'text-inp'}
          value={inputValue}
          autoCapitalize={'none'}
          secureTextEntry={showPassword}
          onChangeText={onInputChange}
          style={styles.inputText}
          {...rest}
        />
        {isProtected && (
          <TouchableOpacity
            testID="eyeIc"
            activeOpacity={0.9}
            style={styles.passwordEye}
            onPress={() => setShowPassword((val) => !val)}
          >
            <Image source={require('../../assets/password/password.png')} />
          </TouchableOpacity>
        )}
      </View>
      {errorText && <ErrorText errorText={errorText} />}
      {isPwdCheck && <AppPasswordErrorGroup inputValue={inputValue} />}
    </View>
  )
}

export default AppTextInput
