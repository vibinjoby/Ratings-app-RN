import React from 'react'
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import MaterialCommIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import ModalPopup from '../../../../components/ModalPopup'
import RestaurantCard from '../../../../components/RestaurantCard'
import Colors from '../../../../utilities/colors'
import { HomeViewProps } from '../../types'
import styles from '../styles'

interface CustomerViewProps {
  sortBy: string
  onSort: () => void
}

const CustomerView = ({
  isLogoutPopupVisible,
  onLogout,
  onNegativeModalPress,
  sortBy,
  onSort,
}: HomeViewProps & CustomerViewProps) => (
  <>
    <SafeAreaView />
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
      <FlatList
        testID="restaurantContainer"
        scrollIndicatorInsets={{ right: 1 }}
        contentContainerStyle={styles.contentContainer}
        style={styles.flatlist}
        data={[]}
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
      />
    </View>
  </>
)

export default React.memo(CustomerView)
