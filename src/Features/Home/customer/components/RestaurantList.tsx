import React from 'react'
import { FlatList, View } from 'react-native'

import RestaurantCard from '../../../../components/RestaurantCard'
import { RestaurantList_getRestaurants_edges as RestaurantData } from '../../gql/__generated__/RestaurantList'
import styles from '../styles'

interface RestaurantListProps {
  listData: Array<RestaurantData>
  onEndReached: () => void
  onCardPress: (id: number | undefined) => void
}

const RestaurantList = ({ listData, onEndReached, onCardPress }: RestaurantListProps) => (
  <FlatList
    testID="restaurantContainer"
    scrollIndicatorInsets={{ right: 1 }}
    contentContainerStyle={styles.contentContainer}
    style={styles.flatlist}
    data={listData}
    renderItem={({ item, index }) => (
      <RestaurantCard
        title={item.node?.restaurantName}
        ratings={item.node?.averageRatings}
        reviewCount={0}
        restaurantImg={{ uri: 'https://source.unsplash.com/user/picoftasty' }}
        testID={`card${index}`}
        onPress={() => onCardPress(item.node?.id)}
      />
    )}
    onEndReached={onEndReached}
    ItemSeparatorComponent={() => <View style={styles.spacing} />}
    keyExtractor={(_, index) => index.toString()}
  />
)

export default RestaurantList
