---
to: src/screens/<%= name %>/index.tsx
---
import React from 'react'
import { View } from 'react-native'
import styles from './styles'

export interface <%= name %>Props { }

const <%= name %>: React.FC< <%= name %>Props> = ({}: <%= name %>Props) => {
  return (<View style={styles.container} />)
}

export default <%= name %>