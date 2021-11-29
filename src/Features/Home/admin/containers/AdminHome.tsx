import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'

import { removeData } from '../../../../utilities/helpers'
import { ScreenNames as BaseModuleScreenNames } from '../../../../BaseModule/constants'
import { ScreenNames } from '../../constants'
import AdminView from '../components/AdminView'
import useNavBar from '../../../../components/CustomNavBar'

const AdminHome: React.FC = () => {
  const data = [
    {
      title: 'Users',
      subHead: 'Find all the users registered in our app both customers and owners',
      img: require('../../../../assets/usersPic/usersPic.png'),
      onPress: () => navigation.navigate(ScreenNames.ALL_USERS),
    },
    {
      title: 'Restaurants',
      subHead: 'Find all the restaurants created by owners in our app',
      img: require('../../../../assets/restaurantsPic/restaurantsPic.png'),
      onPress: () => navigation.navigate(ScreenNames.ALL_RESTAURANTS),
    },
  ]
  const [isLogoutPop, setIsLogoutPop] = useState(false)
  const navigation = useNavigation()

  const togglePopupVisibility = () => setIsLogoutPop((val) => !val)

  const handleLogout = async () => {
    togglePopupVisibility()
    await removeData('userInfo')
    navigation.reset({
      index: 0,
      routes: [{ name: BaseModuleScreenNames.AUTH_STACK }],
    })
  }

  useNavBar({ togglePopupVisibility })

  return (
    <AdminView
      isLogoutPopupVisible={isLogoutPop}
      onNegativeModalPress={togglePopupVisibility}
      onLogout={handleLogout}
      data={data}
    />
  )
}

export default AdminHome
