import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { FlatList, Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native'
import MaterialCommIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useDispatch } from 'react-redux'
import ModalPopup from '../../components/ModalPopup'

import routes from '../../navigations/routes'
import { removeToken } from '../../store/reducers/admin'
import Colors from '../../utilities/colors'
import { removeData } from '../../utilities/helpers'
import styles from './styles'

type ContentType = {
  title: string
  img: ImageSourcePropType
  subHead: string
  onPress: () => void
}

const AdminHome: React.FC = () => {
  const [isLogoutPop, setIsLogoutPop] = useState(false)
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const data = [
    {
      title: 'Users',
      subHead: 'Find all the users registered in our app both customers and owners',
      img: require('../../assets/usersPic/usersPic.png'), //@ts-ignore
      onPress: () => navigation.navigate(routes.ALL_USERS),
    },
    {
      title: 'Restaurants',
      subHead: 'Find all the restaurants created by owners in our app',
      img: require('../../assets/restaurantsPic/restaurantsPic.png'), //@ts-ignore
      onPress: () => navigation.navigate(routes.ALL_RESTAURANTS),
    },
  ]
  const toggleModal = () => {
    setIsLogoutPop((val) => !val)
  }

  const handleLogout = async () => {
    toggleModal()
    dispatch({ type: removeToken.type })
    await removeData('userInfo')
    navigation.reset({
      index: 0, //@ts-ignore
      routes: [{ name: routes.AUTH_STACK }],
    })
  }

  useEffect(() => {
    navigation.setOptions({
      title: '',
      headerLeft: () => <Text style={styles.customerSalutation}>Welcome Admin</Text>,
      headerRight: () => (
        <TouchableOpacity activeOpacity={0.9} onPress={toggleModal}>
          <MaterialCommIcons
            name="logout"
            size={25}
            color={Colors.appOrange}
            style={styles.logout}
          />
        </TouchableOpacity>
      ),
    })
  }, [])

  const Content = ({ title, img, subHead, onPress }: ContentType) => (
    <TouchableOpacity style={styles.contentWrapper} activeOpacity={0.7} onPress={onPress}>
      <Image source={img} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.subheadWrapper}>
        <Text style={styles.subhead}>{subHead}</Text>
        <MaterialCommIcons
          name="chevron-right"
          size={40}
          color={Colors.black}
          style={styles.chevron}
        />
      </View>
    </TouchableOpacity>
  )

  const Seperator = () => <View style={styles.seperator} />

  return (
    <View style={styles.container}>
      <ModalPopup
        isVisible={isLogoutPop}
        content="Are you sure you want to logout?"
        positiveBtnTxt="Logout"
        negativeBtnTxt="Cancel"
        onPositiveBtnPress={handleLogout}
        onNegativeBtnPress={toggleModal}
      />
      <FlatList
        renderItem={({ item }) => (
          <Content
            title={item.title}
            subHead={item.subHead}
            img={item.img}
            onPress={item.onPress}
          />
        )}
        data={data}
        ItemSeparatorComponent={() => <Seperator />}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  )
}

export default AdminHome
