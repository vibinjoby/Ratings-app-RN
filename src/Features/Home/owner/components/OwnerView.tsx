import React from 'react'
import { FlatList, SafeAreaView, ScrollView, Text, View } from 'react-native'

import ModalPopup from '../../../../components/ModalPopup'
import OwnerRestaurantCard from '../../../../components/OwnerRestaurantCard'
import { HomeViewProps } from '../../types'
import styles from '../styles'
import PlusIcon from './PlusIcon'

const OwnerView = ({ isLogoutPopupVisible, onLogout, onNegativeModalPress }: HomeViewProps) => (
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
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>My Restaurants</Text>
        <FlatList
          style={styles.flatlist}
          numColumns={2}
          data={[]}
          contentContainerStyle={styles.contentContainer}
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
    <PlusIcon onPress={() => ({})} />
  </>
)

export default React.memo(OwnerView)
