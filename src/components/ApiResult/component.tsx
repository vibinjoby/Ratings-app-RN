import React from 'react'
import { ApolloError } from '@apollo/client'

import AppLoader from '../AppLoader'
import AppToasts from '../AppToasts'

export interface ApiResultProps {
  loading: boolean
  error: ApolloError | undefined
  children: React.ReactChild
}

const ApiResult = ({ loading, error, children }: ApiResultProps) => {
  if (loading) return <AppLoader />

  if (error)
    return (
      <>
        <AppToasts isError={true} toastMessage={error.message} />
        {children}
      </>
    )

  return <>{children}</>
}

export default ApiResult
