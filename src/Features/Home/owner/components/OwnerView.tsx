import React from 'react'
import { ButtonProps, FlatList, SafeAreaView, Text, View } from 'react-native'

import ModalPopup from '../../../../components/AppModal'
import OwnerRestaurantCard from '../../../../components/OwnerRestaurantCard'
import { MyRestaurants_getOwnedrestaurants as RestaurantData } from '../../gql/__generated__/MyRestaurants'
import { HomeViewProps } from '../../types'
import styles from '../styles'
import PlusIcon from './PlusIcon'

interface OwnerViewProps {
  restaurantData: RestaurantData[] | undefined
  onPlusPress: ButtonProps['onPress']
  onCardPress: (id: number) => void
}

const OwnerView = ({
  restaurantData,
  isLogoutPopupVisible,
  onLogout,
  onNegativeModalPress,
  onPlusPress,
  onCardPress,
}: HomeViewProps & OwnerViewProps) => (
  <>
    <SafeAreaView />
    <ModalPopup
      isVisible={isLogoutPopupVisible}
      content="Are you sure you want to logout?"
      positiveBtnTxt="Logout"
      negativeBtnTxt="Cancel"
      onPositiveBtnPress={onLogout}
      onNegativeBtnPress={onNegativeModalPress}
    />
    <View style={styles.container}>
      <Text style={styles.title}>My Restaurants</Text>
      <FlatList
        style={styles.flatlist}
        numColumns={2}
        data={restaurantData}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item }) => (
          <OwnerRestaurantCard
            id={item.id}
            title={item.restaurantName}
            ratings={item.averageRatings}
            reviewsCount={0}
            onPress={onCardPress}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.spacing} />}
        ListFooterComponent={() => <View style={styles.footerSpacing} />}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
    <PlusIcon testID="addRestaurant" onPress={onPlusPress} />
  </>
)

export default React.memo(OwnerView)
