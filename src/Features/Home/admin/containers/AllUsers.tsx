import React from 'react'
import ApiResult from '../../../../components/ApiResult'

import AllUsersView from '../components/AllUsersView'
import { useAllUsers, useRemoveUser } from '../../hooks'

const AllUsers: React.FC = () => {
  const { data, loading, error, refetch } = useAllUsers()
  const { removeUserMutate } = useRemoveUser()

  const handleRemoveUser = async (id: number) => {
    await removeUserMutate({ variables: { id } })
    refetch()
  }

  if (!data) return <></>

  return (
    <ApiResult loading={loading} error={error}>
      <AllUsersView users={data.users} onRemove={handleRemoveUser} />
    </ApiResult>
  )
}

export default AllUsers
