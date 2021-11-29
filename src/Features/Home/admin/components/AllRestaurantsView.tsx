import React from 'react'
import { FlatList, View } from 'react-native'

import Restaurant from '../../../../components/Restaurant'
import { RestaurantList_getRestaurants_page_edges as RestaurantsList } from '../../gql/__generated__/RestaurantList'
import styles from '../styles/AllRestaurants'

interface AllRestaurantsViewProps {
  restaurants: RestaurantsList[] | null | undefined
  onCardPress: (id: number) => void
}

const AllRestaurantsView = ({ restaurants, onCardPress }: AllRestaurantsViewProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={restaurants}
        testID="restaurantsContainer"
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item }) => (
          <Restaurant
            restaurantName={item.node?.restaurantName}
            reviewsCount={0}
            ratings={item.node?.averageRatings}
            onPress={() => onCardPress(item.node?.id ?? -1)}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.spacing} />}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  )
}

export default React.memo(AllRestaurantsView)
