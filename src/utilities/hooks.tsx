import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import NetInfo from '@react-native-community/netinfo'
import { useNavigation } from '@react-navigation/native'
import MaterialCommIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import userInfoVars from '../store'
import Typography from './typography'
import Colors from './colors'

export const useNoInternet = () => {
  const [isConnected, setIsConnected] = useState(true)
  useEffect(() => {
    checkConnectivity()
  }, [])

  const checkConnectivity = () => {
    NetInfo.addEventListener((state: any) => {
      setIsConnected(state.isConnected)
    })
  }
  return { isConnected }
}

export interface NavBarProps {
  togglePopupVisibility: () => void
}

export const useNavBar = ({ togglePopupVisibility }: NavBarProps) => {
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

const styles = StyleSheet.create({
  logoutBtn: {
    marginRight: 20,
  },
  customerSalutation: {
    ...Typography.RegularFont,
    fontSize: 16,
    paddingLeft: 20,
  },
  navHeader: {
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 6,
  },
})
