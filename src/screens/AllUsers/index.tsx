import React, { useState } from 'react'
import { useEffect } from 'react'
import { FlatList, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import ModalPopup from '../../components/ModalPopup'

import Users from '../../components/Users'
import { RootState } from '../../store'
import { filterUser, getAllUsers } from '../../store/reducers/admin'
import styles from './styles'

const AllUsers: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false)
  const [removableId, setRemovableId] = useState('')
  const token = useSelector((state: RootState) => state.admin.token)
  const allUsers = useSelector((state: RootState) => state.admin.users)
  const dispatch = useDispatch()

  const toggleModal = (id?: string) => {
    setRemovableId(id ? id : '')
    setModalVisible((val) => !val)
  }

  useEffect(() => {
    if (!token) return
    dispatch(getAllUsers(token))
  }, [token])

  const onRemove = () => {
    toggleModal()
    dispatch(filterUser(token, removableId))
  }

  if (!allUsers) return <></>

  return (
    <View style={styles.container}>
      <ModalPopup
        isVisible={isModalVisible}
        content="Are you sure you want to delete this user"
        positiveBtnTxt="Yes"
        negativeBtnTxt="No"
        onPositiveBtnPress={onRemove}
        onNegativeBtnPress={toggleModal}
      />
      <FlatList
        data={allUsers}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item, index }) => (
          <Users //@ts-ignore
            id={item._id} //@ts-ignore
            name={item.fullName} //@ts-ignore
            typeOfUser={item.typeOfUser}
            onDelete={toggleModal}
            index={index}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.spacing} />}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  )
}

export default AllUsers
