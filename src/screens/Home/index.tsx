import React from 'react'
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import RestaurantCard from '../../components/RestaurantCard'

import styles from './styles'

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const DummyDatas = [
    {
      title: 'Joes Pizzeria',
      ratings: 3,
      reviewCount: 84,
      restaurantImg: require('../../assets/dummy-restaurant-pic.png'),
    },
    {
      title: 'Joes Pizzeria',
      ratings: 3,
      reviewCount: 84,
      restaurantImg: require('../../assets/dummy-restaurant-pic.png'),
    },
    {
      title: 'Joes Pizzeria',
      ratings: 3,
      reviewCount: 84,
      restaurantImg: require('../../assets/dummy-restaurant-pic.png'),
    },
  ]
  const CustomerHeader = () => (
    <View style={styles.headerWrapper}>
      <Text style={styles.customerSalutation}>Welcome Vibin Joby</Text>
      <TouchableOpacity activeOpacity={0.9}>
        <Image style={styles.userPic} source={require('../../assets/guest-pic.png')} />
      </TouchableOpacity>
    </View>
  )
  return (
    <View style={styles.container}>
      <CustomerHeader />
      <Text style={styles.title}>Discover</Text>
      <FlatList
        style={styles.flatlist}
        data={DummyDatas}
        renderItem={({ item }) => (
          <RestaurantCard
            title={item.title}
            ratings={item.ratings}
            reviewCount={item.reviewCount}
            restaurantImg={item.restaurantImg}
            onPress={() => console.log('pressed')}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.spacing} />}
        ListFooterComponent={() => <View style={styles.footerSpacing} />}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  )
}

export default Home
