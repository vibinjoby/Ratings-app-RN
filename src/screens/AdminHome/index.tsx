import React from 'react'
import { View } from 'react-native'
import styles from './styles'

export interface AdminHomeProps { }

const AdminHome: React.FC< AdminHomeProps> = ({}: AdminHomeProps) => {
  return (<View style={styles.container} />)
}

export default AdminHome