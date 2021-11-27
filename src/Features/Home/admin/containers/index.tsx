import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'

import { removeData } from '../../../../utilities/helpers'
import { ScreenNames } from '../../../../BaseModule/constants'
import AdminView from '../components/AdminView'
import useNavBar from '../../../../components/CustomNavBar'

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

  useNavBar({ togglePopupVisibility })

  return (
    <AdminView
      isLogoutPopupVisible={isLogoutPop}
      onNegativeModalPress={togglePopupVisibility}
      onLogout={handleLogout}
    />
  )
}

export default AdminHome
