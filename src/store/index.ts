import { makeVar } from '@apollo/client'

export interface UserInfoProps {
  token?: string
  userInfo?: {
    isAdmin: boolean
    name: string
    userType: string
  }
}

const userInfoVars = makeVar<UserInfoProps>({})

export default userInfoVars
