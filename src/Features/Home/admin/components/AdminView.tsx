import React from 'react'
import { FlatList, View } from 'react-native'

import ModalPopup from '../../../../components/ModalPopup'
import { HomeViewProps } from '../../types'
import styles from '../styles'
import Content from './Content'
import Seperator from './Seperator'

const data = [
  {
    title: 'Users',
    subHead: 'Find all the users registered in our app both customers and owners',
    img: require('../../../../assets/usersPic/usersPic.png'),
    onPress: () => {},
  },
  {
    title: 'Restaurants',
    subHead: 'Find all the restaurants created by owners in our app',
    img: require('../../../../assets/restaurantsPic/restaurantsPic.png'),
    onPress: () => {},
  },
]

const AdminView = ({ isLogoutPopupVisible, onLogout, onNegativeModalPress }: HomeViewProps) => (
  <View style={styles.container}>
    <ModalPopup
      testID="logoutPop"
      isVisible={isLogoutPopupVisible}
      content="Are you sure you want to logout?"
      positiveBtnTxt="Logout"
      negativeBtnTxt="Cancel"
      onPositiveBtnPress={onLogout}
      onNegativeBtnPress={onNegativeModalPress}
    />
    <FlatList
      renderItem={({ item }) => (
        <Content title={item.title} subHead={item.subHead} img={item.img} onPress={item.onPress} />
      )}
      data={data}
      ItemSeparatorComponent={() => <Seperator />}
      keyExtractor={(_, index) => index.toString()}
    />
  </View>
)

export default React.memo(AdminView)
