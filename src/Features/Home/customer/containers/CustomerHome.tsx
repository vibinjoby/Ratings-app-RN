import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { removeData } from '../../../../utilities/helpers'
import { ScreenNames as BaseModuleScreenNames } from '../../../../BaseModule/constants'
import { ScreenNames } from '../../constants'
import CustomerView from '../components/CustomerView'
import { useAllRestaurants } from '../../hooks'
import ApiResult from '../../../../components/ApiResult'
import useNavBar from '../../../../components/CustomNavBar'

const CustomerHome: React.FC = () => {
  const [isLogoutPop, setIsLogoutPop] = useState(false)
  const [sortBy, setSortBy] = useState('sort-descending')

  const navigation = useNavigation()

  const { data, loading, error, fetchMore } = useAllRestaurants()

  const handleLogout = async () => {
    togglePopupVisibility()
    await removeData('userInfo')
    navigation.reset({
      index: 0,
      routes: [{ name: BaseModuleScreenNames.AUTH_STACK }],
    })
  }

  const toggleSortFilter = () =>
    setSortBy((val) => (val === 'sort-ascending' ? 'sort-descending' : 'sort-ascending'))

  const togglePopupVisibility = () => setIsLogoutPop((val) => !val)

  useNavBar({ togglePopupVisibility })

  const handleEndReached = () => {
    if (data?.getRestaurants?.page?.pageInfo?.hasNextPage)
      fetchMore({
        variables: {
          first: 4,
          offset: data.getRestaurants.page.edges?.length,
        },
      })
  }

  const handleCardPress = (id: number | undefined) => {
    navigation.navigate(ScreenNames.RESTAURANT_DETAILS_NAV, { restaurantId: id })
  }

  return (
    <ApiResult loading={false} error={error}>
      <CustomerView
        isLogoutPopupVisible={isLogoutPop}
        onNegativeModalPress={togglePopupVisibility}
        onLogout={handleLogout}
        sortBy={sortBy}
        onSort={toggleSortFilter}
        onCardPress={handleCardPress}
        restaurantList={data?.getRestaurants?.page?.edges ?? []}
        onEndReached={handleEndReached}
      />
    </ApiResult>
  )
}

export default CustomerHome
