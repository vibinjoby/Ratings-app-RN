import React from 'react'
import { FlatList, View } from 'react-native'

import ModalPopup from '../../../../components/AppModal'
import { HomeViewProps } from '../../types'
import styles from '../styles'
import Content from './Content'
import Seperator from './Seperator'

interface AdminViewProps {
  data?: Array<any>
}

const AdminView = ({
  data,
  isLogoutPopupVisible,
  onLogout,
  onNegativeModalPress,
}: HomeViewProps & AdminViewProps) => (
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
