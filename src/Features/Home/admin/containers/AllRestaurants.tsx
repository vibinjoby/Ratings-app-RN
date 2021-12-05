import React from 'react'
import { useNavigation } from '@react-navigation/native'

import AllRestaurantsView from '../components/AllRestaurantsView'
import { ScreenNames } from '../../constants'
import { useAllRestaurants } from '../../hooks'
import ApiResult from '../../../../components/ApiResult'

const AllRestaurants: React.FC = () => {
  const navigation = useNavigation()
  const { data, loading, error } = useAllRestaurants()

  const handlePress = (restaurantId: number) => {
    navigation.navigate(ScreenNames.ALL_REVIEWS, { restaurantId })
  }

  if (!data) return <></>

  return (
    <ApiResult loading={loading} error={error}>
      <AllRestaurantsView restaurants={data?.getRestaurants.edges} onCardPress={handlePress} />
    </ApiResult>
  )
}

export default AllRestaurants
