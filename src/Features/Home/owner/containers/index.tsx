import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MaterialCommIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import EmptyRestaurants from '../components/EmptyRestaurants'
import styles from '../styles'
import Colors from '../../../../utilities/colors'
import OwnerView from '../components/OwnerView'
import { ScreenNames } from '../../../../BaseModule/constants'
import { removeData } from '../../../../utilities/helpers'

const OwnerHome: React.FC = () => {
  const [isLogoutPop, setIsLogoutPop] = useState(false)
  const navigation = useNavigation()
  const myRestaurants: string[] = []

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
      headerRight: () => (
        <TouchableOpacity
          testID="logoutBtn"
          activeOpacity={0.9}
          onPress={togglePopupVisibility}
          style={styles.logout}
        >
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

  const togglePopupVisibility = () => setIsLogoutPop((val) => !val)

  if (!myRestaurants || myRestaurants.length === 0) {
    return (
      <EmptyRestaurants
        isLogoutPopupVisible={isLogoutPop}
        onLogout={handleLogout}
        onNegativeModalPress={togglePopupVisibility}
      />
    )
  }

  return (
    <OwnerView
      isLogoutPopupVisible={isLogoutPop}
      onNegativeModalPress={togglePopupVisibility}
      onLogout={handleLogout}
    />
  )
}

export default OwnerHome
