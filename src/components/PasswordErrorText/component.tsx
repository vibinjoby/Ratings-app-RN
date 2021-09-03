import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './styles'
export interface PasswordErrorTextProps {
  inputValue: any
}

const PasswordErrorText: React.FC<PasswordErrorTextProps> = ({
  inputValue,
}: PasswordErrorTextProps) => {
  const successImg = require('../../assets/success-img.png')
  const errorImg = require('../../assets/error.png')

  const isUpperCase = (string: string) => /(.*[A-Z].*)/.test(string)
  const isLowerCase = (string: string) => /(.*[a-z].*)/.test(string)
  return (
    <View>
      <Text style={styles.headerTxt}>Password must contain:</Text>

      <View style={styles.container}>
        <Image
          testID="lessCharacters"
          source={inputValue.length >= 8 ? successImg : errorImg}
          style={styles.img}
        />
        <Text style={styles.subHeader}>At least 8 characters</Text>
      </View>
      <View style={styles.container}>
        <Image
          testID="minUppercase"
          source={inputValue.length > 0 && isUpperCase(inputValue) ? successImg : errorImg}
          style={styles.img}
        />
        <Text style={styles.subHeader}>At least 1 uppercase letter</Text>
      </View>
      <View style={styles.container}>
        <Image
          testID="minLowercase"
          source={inputValue.length > 0 && isLowerCase(inputValue) ? successImg : errorImg}
          style={styles.img}
        />
        <Text style={styles.subHeader}>At least 1 lowercase letter</Text>
      </View>
      <View style={styles.container}>
        <Image
          testID="minSplCharacter"
          source={
            inputValue.match(/^.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?].*$/) ? successImg : errorImg
          }
          style={styles.img}
        />
        <Text style={styles.subHeader}>At least 1 special character(#,%,&)</Text>
      </View>
      <View style={styles.container}>
        <Image
          source={inputValue.match(/\d/) ? successImg : errorImg}
          style={styles.img}
          testID="minNumber"
        />
        <Text style={styles.subHeader}>At least 1 number (0-9)</Text>
      </View>
    </View>
  )
}

export default PasswordErrorText
