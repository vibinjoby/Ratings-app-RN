import React, { useState } from 'react'
import { useEffect } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Platform,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import MaterialCommIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'

import RestaurantCard from '../../components/RestaurantCard'
import { RootState } from '../../store'
import { fetchRestaurants, resetRestaurantData } from '../../store/reducers/restaurant'
import styles from './styles'
import constants from '../../configs/commonConst'
import Colors from '../../utilities/colors'
import { logout } from '../../store/reducers/auth'
import { removeData } from '../../utilities/helpers'
import routes from '../../navigations/routes'
import ModalPopup from '../../components/ModalPopup'

const Home: React.FC = () => {
  const [isLogoutPop, setIsLogoutPop] = useState(false)
  const [endLoading, setEndLoading] = useState(false)
  const [pgNo, setPgNo] = useState(1)
  const [isFetching, setIsFetching] = useState(false)

  const token = useSelector((state: RootState) => state.auth.token)
  const fullName = useSelector((state: RootState) => state.auth.userInfo.fullName)
  const restaurantData = useSelector((state: RootState) => state.restaurants.restaurants)
  const totalPgs = useSelector((state: RootState) => state.restaurants.totalRestaurants)
  const latestReviews = useSelector(
    (state: RootState) => state.restaurants.restaurantDetails.latestReviews,
  )
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const handleLogout = async () => {
    toggleModal()
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
        <TouchableOpacity activeOpacity={0.9} onPress={toggleModal} testID="logoutBtn">
          <MaterialCommIcons
            name="logout"
            size={25}
            color={Colors.appOrange}
            style={styles.logoutBtn}
          />
        </TouchableOpacity>
      ),
      headerStyle: styles.navHeader,
    })
  }, [])

  useEffect(() => {
    if (!token) return
    setIsFetching(true)
    dispatch(fetchRestaurants(token, pgNo))
  }, [])

  useEffect(() => {
    onRefresh()
  }, [latestReviews])

  useEffect(() => {
    if (restaurantData) setIsFetching(false)
  }, [restaurantData])

  const onEndReached = async () => {
    if (endLoading) return
    if (pgNo + 1 > totalPgs) return
    setEndLoading(true)
    dispatch(fetchRestaurants(token, pgNo + 1))
    setPgNo((pg) => pg + 1)
    setEndLoading(false)
  }

  const toggleModal = () => {
    setIsLogoutPop((val) => !val)
  }

  const onRefresh = () => {
    dispatch({ type: resetRestaurantData.type })
    setPgNo(1)
    dispatch(fetchRestaurants(token, 1))
  }

  const ViewMore = () => (
    <View style={styles.footerSpacing}>
      <ActivityIndicator animating color={Colors.appOrange} size="large" />
    </View>
  )

  if (restaurantData.length < 1)
    return (
      <ModalPopup
        testID="logoutPop"
        isVisible={isLogoutPop}
        content="Are you sure you want to logout?"
        positiveBtnTxt="Logout"
        negativeBtnTxt="Cancel"
        onPositiveBtnPress={handleLogout}
        onNegativeBtnPress={toggleModal}
      />
    )
  return (
    <>
      <SafeAreaView />
      <ModalPopup
        testID="logoutPop"
        isVisible={isLogoutPop}
        content="Are you sure you want to logout?"
        positiveBtnTxt="Logout"
        negativeBtnTxt="Cancel"
        onPositiveBtnPress={handleLogout}
        onNegativeBtnPress={toggleModal}
      />
      <View style={styles.container} testID="homeContainer">
        <Text style={styles.title}>Discover</Text>
        <FlatList
          refreshing={isFetching}
          onRefresh={onRefresh}
          testID="restaurantContainer"
          scrollIndicatorInsets={{ right: 1 }}
          contentContainerStyle={styles.contentContainer}
          style={styles.flatlist}
          data={restaurantData}
          renderItem={({ item, index }) => (
            <RestaurantCard //@ts-ignore
              id={item._id} //@ts-ignore
              title={item.restaurant_name} //@ts-ignore
              ratings={item.average_ratings} //@ts-ignore
              reviewCount={item.reviewsCount} //@ts-ignore
              restaurantImg={{ uri: constants.DUMMY_PIC }}
              testID={`card${index}`}
            />
          )}
          ItemSeparatorComponent={() => <View style={styles.spacing} />}
          keyExtractor={(_, index) => index.toString()}
          onEndReached={onEndReached}
          onEndReachedThreshold={Platform.OS === 'android' ? 10 : 0}
          ListFooterComponent={() => <>{endLoading && <ViewMore />}</>}
        />
      </View>
    </>
  )
}

export default Home
