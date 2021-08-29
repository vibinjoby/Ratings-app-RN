import React, { useState } from 'react'
import { useEffect } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import MaterialCommIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'

import RestaurantCard from '../../components/RestaurantCard'
import { RootState } from '../../store'
import { fetchRestaurants } from '../../store/reducers/restaurant'
import styles from './styles'
import constants from '../../configs/commonConst'
import Colors from '../../utilities/colors'
import { logout } from '../../store/reducers/auth'
import { removeData } from '../../utilities/helpers'
import routes from '../../navigations/routes'

const Home: React.FC = () => {
  const token = useSelector((state: RootState) => state.auth.token)
  const fullName = useSelector((state: RootState) => state.auth.userInfo.fullName)
  const restaurantData = useSelector((state: RootState) => state.restaurants.restaurants)
  const dispatch = useDispatch()
  const navigation = useNavigation()

  useEffect(() => {
    if (!token) return
    dispatch(fetchRestaurants(token, 1))
  }, [])

  const handleLogout = async () => {
    dispatch({ type: logout.type })
    await removeData('userInfo')
    navigation.reset({
      index: 0, //@ts-ignore
      routes: [{ name: routes.AUTH_STACK }],
    })
  }

  const CustomerHeader = () => (
    <View style={styles.headerWrapper}>
      <Text style={styles.customerSalutation}>Welcome {fullName}</Text>
      <TouchableOpacity activeOpacity={0.9} onPress={handleLogout}>
        <MaterialCommIcons name="logout" size={25} color={Colors.appOrange} />
      </TouchableOpacity>
    </View>
  )
  if (restaurantData.length < 1) return <></>
  return (
    <>
      <SafeAreaView />
      <View style={styles.container}>
        <CustomerHeader />
        <Text style={styles.title}>Discover</Text>
        <FlatList
          style={styles.flatlist}
          data={restaurantData}
          renderItem={({ item }) => (
            <RestaurantCard //@ts-ignore
              id={item._id} //@ts-ignore
              title={item.restaurant_name} //@ts-ignore
              ratings={item.average_ratings} //@ts-ignore
              reviewCount={item.reviewsCount} //@ts-ignore
              restaurantImg={{ uri: constants.DUMMY_PIC }}
            />
          )}
          ItemSeparatorComponent={() => <View style={styles.spacing} />}
          ListFooterComponent={() => <View style={styles.footerSpacing} />}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    </>
  )
}

export default Home
