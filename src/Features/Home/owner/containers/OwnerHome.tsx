import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MaterialCommIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import EmptyRestaurants from '../components/EmptyRestaurants'
import styles from '../styles'
import Colors from '../../../../utilities/colors'
import OwnerView from '../components/OwnerView'
import { ScreenNames as BaseScreenNames } from '../../../../BaseModule/constants'
import { ScreenNames } from '../../constants'
import { removeData } from '../../../../utilities/helpers'
import { useOwnerRestaurants } from '../../hooks'
import ApiResult from '../../../../components/ApiResult'

const OwnerHome: React.FC = () => {
  const [isLogoutPop, setIsLogoutPop] = useState(false)
  const navigation = useNavigation()
  const { data, loading, error } = useOwnerRestaurants()

  const handleLogout = async () => {
    togglePopupVisibility()
    await removeData('userInfo')
    navigation.reset({
      index: 0,
      routes: [{ name: BaseScreenNames.AUTH_STACK }],
    })
  }

  const handleAddRestaurant = () => navigation.navigate(ScreenNames.ADD_RESTAURANT)

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

  if (!data || data?.getOwnedRestaurants?.length === 0) {
    return (
      <EmptyRestaurants
        isLogoutPopupVisible={isLogoutPop}
        onLogout={handleLogout}
        onNegativeModalPress={togglePopupVisibility}
        onPlusPress={handleAddRestaurant}
      />
    )
  }

  return (
    <ApiResult loading={loading} error={error}>
      <OwnerView
        restaurantData={data?.getOwnedrestaurants}
        isLogoutPopupVisible={isLogoutPop}
        onNegativeModalPress={togglePopupVisibility}
        onLogout={handleLogout}
        onPlusPress={handleAddRestaurant}
      />
    </ApiResult>
  )
}

export default OwnerHome
