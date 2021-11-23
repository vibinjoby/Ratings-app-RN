import React, { useState, useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import MaterialCommIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'

import styles from '../styles'
import Colors from '../../../../utilities/colors'
import { removeData } from '../../../../utilities/helpers'
import { ScreenNames } from '../../../../BaseModule/constants'
import CustomerView from '../components/CustomerView'
import { useAllRestaurants } from '../../hooks'
import ApiResult from '../../../../components/ApiResult'

const CustomerHome: React.FC = () => {
  const [isLogoutPop, setIsLogoutPop] = useState(false)
  const [sortBy, setSortBy] = useState('sort-descending')

  const navigation = useNavigation()

  const { data, loading, error, fetchMore } = useAllRestaurants()

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

  const handleLogout = async () => {
    togglePopupVisibility()
    await removeData('userInfo')
    navigation.reset({
      index: 0,
      routes: [{ name: ScreenNames.AUTH_STACK }],
    })
  }

  const toggleSortFilter = () =>
    setSortBy((val) => (val === 'sort-ascending' ? 'sort-descending' : 'sort-ascending'))

  const togglePopupVisibility = () => setIsLogoutPop((val) => !val)

  const handleEndReached = () => {
    if (!data.getRestaurants.page.pageInfo.hasNextPage) return

    fetchMore({
      variables: {
        limit: 3,
        offset: data?.getRestaurants?.page?.edges?.length,
      },
    })
  }

  const handleCardPress = (id: number | undefined) => {
    navigation.navigate('')
  }

  return (
    <ApiResult loading={loading} error={error}>
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
