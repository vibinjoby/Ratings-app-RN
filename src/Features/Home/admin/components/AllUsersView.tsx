import React, { useState } from 'react'
import { FlatList, View } from 'react-native'

import ModalPopup from '../../../../components/AppModal'
import { UsersList } from '../../gql/__generated__/UsersList'
import styles from '../styles/AllUsers'
import UserRow from './UserRow'

interface AllUsersViewProps {
  onRemove: (arg0: number) => void
}

const AllUsersView = ({ users, onRemove }: AllUsersViewProps & UsersList) => {
  const [isDeleteModalVisible, showDeleteModal] = useState(false)
  const [removableId, setRemovableId] = useState<number>(-1)

  const toggleDeleteModal = () => showDeleteModal((val) => !val)

  const onDeleteSelection = (id: number) => {
    toggleDeleteModal()
    setRemovableId(id)
  }

  return (
    <View style={styles.container}>
      <ModalPopup
        isVisible={isDeleteModalVisible}
        content="Are you sure you want to delete this user"
        positiveBtnTxt="Yes"
        negativeBtnTxt="No"
        onPositiveBtnPress={() => {
          toggleDeleteModal()
          onRemove(removableId)
        }}
        onNegativeBtnPress={toggleDeleteModal}
      />
      <FlatList
        data={users}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item, index }) => (
          <UserRow
            id={item.id}
            name={item.fullName}
            typeOfUser={item.userType}
            onDelete={onDeleteSelection}
            index={index}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.spacing} />}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  )
}

export default React.memo(AllUsersView)
