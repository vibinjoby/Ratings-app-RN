import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import EmptyRestaurants from '../components/EmptyRestaurants'
import OwnerView from '../components/OwnerView'
import { ScreenNames as BaseScreenNames } from '../../../../BaseModule/constants'
import { ScreenNames } from '../../constants'
import { removeData } from '../../../../utilities/helpers'
import { useOwnerRestaurants } from '../../hooks'
import ApiResult from '../../../../components/ApiResult'
import { useNavBar } from '../../../../utilities/CustomNavBar'

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

  const togglePopupVisibility = () => setIsLogoutPop((val) => !val)

  useNavBar({ togglePopupVisibility })

  const handleCardPress = (id: number) => {
    navigation.navigate(ScreenNames.RESTAURANT_DETAILS_NAV, { restaurantId: id })
  }

  if (data?.getOwnedrestaurants?.length === 0) {
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
        onCardPress={handleCardPress}
      />
    </ApiResult>
  )
}

export default OwnerHome
