import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import MaterialCommIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import ModalPopup from '../../../../components/ModalPopup'
import Colors from '../../../../utilities/colors'
import { RestaurantList_getRestaurants_page_edges as RestaurantData } from '../../gql/__generated__/RestaurantList'
import { HomeViewProps } from '../../types'
import styles from '../styles'
import RestaurantList from './RestaurantList'

interface CustomerViewProps {
  sortBy: string
  onSort: () => void
  restaurantList: Array<RestaurantData>
  onEndReached: () => void
  onCardPress: (id: number | undefined) => void
}

const CustomerView = ({
  isLogoutPopupVisible,
  onLogout,
  onNegativeModalPress,
  sortBy,
  onSort,
  restaurantList,
  onEndReached,
  onCardPress,
}: HomeViewProps & CustomerViewProps) => (
  <>
    <ModalPopup
      testID="logoutPop"
      isVisible={isLogoutPopupVisible}
      content="Are you sure you want to logout?"
      positiveBtnTxt="Logout"
      negativeBtnTxt="Cancel"
      onPositiveBtnPress={onLogout}
      onNegativeBtnPress={onNegativeModalPress}
    />
    <View style={styles.container} testID="homeContainer">
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Discover</Text>
        <TouchableOpacity activeOpacity={0.7} onPress={onSort}>
          <MaterialCommIcons
            color={Colors.appOrange}
            style={styles.sortIc}
            name={sortBy}
            size={30}
          />
        </TouchableOpacity>
      </View>
      <RestaurantList
        listData={restaurantList}
        onEndReached={onEndReached}
        onCardPress={onCardPress}
      />
    </View>
  </>
)

export default CustomerView
