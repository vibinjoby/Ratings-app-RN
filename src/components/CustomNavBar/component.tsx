import React, { useEffect } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MaterialCommIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import userInfoVars from '../../store'
import Colors from '../../utilities/colors'
import styles from './styles'

export interface NavBarProps {
  togglePopupVisibility: () => void
}

const useNavBar = ({ togglePopupVisibility }: NavBarProps) => {
  const { userInfo } = userInfoVars()
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      title: '',
      headerLeft: () => <Text style={styles.customerSalutation}>Welcome {userInfo?.name}</Text>,
      headerStyle: styles.navHeader,
      headerRight: () => (
        <TouchableOpacity testID="logoutBtn" activeOpacity={0.9} onPress={togglePopupVisibility}>
          <MaterialCommIcons
            name="logout"
            size={25}
            color={Colors.appOrange}
            style={styles.logoutBtn}
          />
        </TouchableOpacity>
      ),
    })
  }, [togglePopupVisibility])
}

export default useNavBar
