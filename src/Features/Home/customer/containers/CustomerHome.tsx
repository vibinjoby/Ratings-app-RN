import React, { useState, useEffect } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import MaterialCommIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'

import styles from '../styles'
import Colors from '../../../../utilities/colors'
import { removeData } from '../../../../utilities/helpers'
import { ScreenNames } from '../../../../BaseModule/constants'
import CustomerView from '../components/CustomerView'

const CustomerHome: React.FC = () => {
  const [isLogoutPop, setIsLogoutPop] = useState(false)
  const [sortBy, setSortBy] = useState('sort-descending')

  const navigation = useNavigation()

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
        <TouchableOpacity activeOpacity={0.9} onPress={togglePopupVisibility} testID="logoutBtn">
          <MaterialCommIcons
            name="logout"
            size={25}
            color={Colors.appOrange}
            style={styles.logoutBtn}
          />
        </TouchableOpacity>
      ),
    })
  }, [])

  const toggleSortFilter = () =>
    setSortBy((val) => (val === 'sort-ascending' ? 'sort-descending' : 'sort-ascending'))

  const togglePopupVisibility = () => setIsLogoutPop((val) => !val)

  return (
    <CustomerView
      isLogoutPopupVisible={isLogoutPop}
      onNegativeModalPress={togglePopupVisibility}
      onLogout={handleLogout}
      sortBy={sortBy}
      onSort={toggleSortFilter}
    />
  )
}

export default CustomerHome
