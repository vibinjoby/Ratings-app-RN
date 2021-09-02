import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { FlatList, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import Restaurant from '../../components/Restaurant'
import routes from '../../navigations/routes'
import { RootState } from '../../store'
import { getAllRestaurants } from '../../store/reducers/admin'
import styles from './styles'

const AllRestaurants: React.FC = () => {
  const restaurantData = useSelector((state: RootState) => state.admin.restaurants)
  const navigation = useNavigation()
  const token = useSelector((state: RootState) => state.admin.token)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!token) return
    dispatch(getAllRestaurants(token))
  }, [token])

  return (
    <View style={styles.container}>
      <FlatList
        data={restaurantData}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item }) => (
          <Restaurant //@ts-ignore
            restaurantName={item.restaurant_name} //@ts-ignore
            reviewsCount={item.reviewsCount} //@ts-ignore
            ratings={item.average_ratings} //@ts-ignore
            onPress={() => navigation.navigate(routes.ALL_REVIEWS, { id: item._id })}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.spacing} />}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  )
}

export default AllRestaurants
