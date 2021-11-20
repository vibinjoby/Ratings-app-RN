import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import MaterialCommIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Colors from '../../../../utilities/colors'
import { removeData } from '../../../../utilities/helpers'
import { ScreenNames } from '../../../../BaseModule/constants'
import AdminView from '../components/AdminView'
import styles from '../styles'

const AdminHome: React.FC = () => {
  const [isLogoutPop, setIsLogoutPop] = useState(false)
  const navigation = useNavigation()

  const togglePopupVisibility = () => setIsLogoutPop((val) => !val)

  const handleLogout = async () => {
    togglePopupVisibility()
    await removeData('userInfo')
    navigation.reset({
      index: 0,
      routes: [{ name: ScreenNames.AUTH_STACK }],
    })
  }

  useEffect(() => {
    navigation.setOptions({
      title: '',
      headerRight: () => (
        <TouchableOpacity activeOpacity={0.9} onPress={togglePopupVisibility}>
          <MaterialCommIcons
            name="logout"
            size={25}
            color={Colors.appOrange}
            style={styles.logout}
          />
        </TouchableOpacity>
      ),
    })
  }, [])

  return (
    <AdminView
      isLogoutPopupVisible={isLogoutPop}
      onNegativeModalPress={togglePopupVisibility}
      onLogout={handleLogout}
    />
  )
}

export default AdminHome
