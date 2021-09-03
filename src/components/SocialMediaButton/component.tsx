import React from 'react'
import { TouchableOpacity, Image, Text } from 'react-native'

import styles from './styles'

export interface SocialMediaButtonProps {
  testID?: string
  mediaType: 'fb' | 'google'
  mediaText: string
  style?: Record<string, unknown>
  onPress: () => void
}

const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({
  testID,
  mediaType,
  mediaText,
  style,
  onPress,
}: SocialMediaButtonProps) => {
  return (
    <TouchableOpacity
      testID={testID}
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.buttonContainer, mediaType === 'fb' && styles.fbBorder, style]}
    >
      <Image
        testID="mediaImg"
        source={
          mediaType === 'fb'
            ? require('../../assets/facebookIcon/facebookIcon.png')
            : require('../../assets/googleIcon/googleIcon.png')
        }
        style={styles.socialImg}
        resizeMode={'contain'}
      />
      <Text style={styles.buttonText}>{mediaText}</Text>
    </TouchableOpacity>
  )
}

export default SocialMediaButton
