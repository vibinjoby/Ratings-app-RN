import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, FlatList, ScrollView, SafeAreaView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import MaterialCommIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { RootState } from '../../store'
import { logout } from '../../store/reducers/auth'
import { getMyRestaurants } from '../../store/reducers/owner'
import Colors from '../../utilities/colors'
import { removeData } from '../../utilities/helpers'
import styles from './styles'
import RestaurantCard from '../../components/RestaurantCard'
import routes from '../../navigations/routes'
import constants from '../../configs/commonConst'
import OwnerRestaurantCard from '../../components/OwnerRestaurantCard'

const OwnerHome: React.FC = () => {
  const token = useSelector((state: RootState) => state.auth.token)
  const fullName = useSelector((state: RootState) => state.auth.userInfo.fullName)
  const myRestaurants = useSelector((state: RootState) => state.owner.restaurants)
  const dispatch = useDispatch()
  const navigation = useNavigation()

  useEffect(() => {
    if (!token) return

    dispatch(getMyRestaurants(token))
  }, [token])

  const handleLogout = async () => {
    dispatch({ type: logout.type })
    await removeData('userInfo')
    navigation.reset({
      index: 0, //@ts-ignore
      routes: [{ name: routes.AUTH_STACK }],
    })
  }

  useEffect(() => {
    navigation.setOptions({
      title: '',
      headerLeft: () => <Text style={styles.customerSalutation}>Welcome {fullName}</Text>,
      headerRight: () => (
        <TouchableOpacity activeOpacity={0.9} onPress={handleLogout} style={styles.logout}>
          <MaterialCommIcons name="logout" size={25} color={Colors.appOrange} />
        </TouchableOpacity>
      ),
      headerStyle: styles.navHeader,
    })
  }, [])

  const PlusIc = () => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.plusIcContainer} //@ts-ignore
      onPress={() => navigation.navigate(routes.ADD_RESTAURANT)}
    >
      <Text style={styles.plusTxt}>+</Text>
    </TouchableOpacity>
  )

  return (
    <>
      <SafeAreaView />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>My Restaurants</Text>
          <FlatList
            style={styles.flatlist}
            numColumns={2}
            data={myRestaurants}
            contentContainerStyle={{ justifyContent: 'space-between' }}
            renderItem={({ item }) => (
              <OwnerRestaurantCard //@ts-ignore
                id={item._id} //@ts-ignore
                title={item.restaurant_name} //@ts-ignore
                ratings={item.average_ratings} //@ts-ignore
                reviewsCount={item.reviewsCount} //@ts-ignore
                restaurantImg={{ uri: constants.DUMMY_PIC }}
                onPress={() =>
                  //@ts-ignore
                  navigation.navigate(routes.OWNER_REVIEW_DETAILS, { id: item._id })
                }
              />
            )}
            ItemSeparatorComponent={() => <View style={styles.spacing} />}
            ListFooterComponent={() => <View style={styles.footerSpacing} />}
            keyExtractor={(_, index) => index.toString()}
          />
        </View>
      </ScrollView>
      <PlusIc />
    </>
  )
}

export default OwnerHome
