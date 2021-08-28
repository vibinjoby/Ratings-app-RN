import { createSlice } from '@reduxjs/toolkit'
import { fetchLoginFormDetails, registerUserDetails } from '../../network/AuthService'

import { decodeToken } from '../../utilities/helpers'
import { apiCallBegan } from '../actions/api'
import { store } from '../index'

type UserInfo = {
  phoneNum: string
  email: string
  fullName: string
  id: string
  location: Array<any>
  iat: any
  typeOfUser: string
}
export type AuthState = {
  userInfo: UserInfo
  token: string
  notifications: Record<string, unknown>
  resetPwd: Record<string, unknown>
  errorCode?: number
}

const initialState = {
  userInfo: {
    phoneNum: '',
    email: '',
    fullName: '',
    id: '',
    location: [],
    iat: '',
    typeOfUser: '',
  },
  token: '',
  notifications: {},
  resetPwd: { email: '', token: '' },
  errorCode: 0,
}

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loadUserInfo: (state: AuthState, action) => {
      const { token, userInfo } = action.payload
      state.userInfo = userInfo
      state.token = token
    },
    login: (state: AuthState, action) => {
      const { data } = action.payload
      const userInfo = decodeToken(data.token) as UserInfo
      state.userInfo = userInfo
      state.token = data.token
      if (data.code) {
        state.errorCode = data.code
      }
    },
    logout: (state: AuthState, _) => {
      state.userInfo = initialState.userInfo
      state.token = initialState.token
      state.errorCode = 0
    },
  },
})

export const { loadUserInfo, login, logout } = slice.actions

export default slice.reducer

export const loginUser =
  (email: string, password: string, typeOfUser: string) => (dispatch: typeof store.dispatch) => {
    dispatch({
      type: apiCallBegan.type,
      payload: {
        apiMethod: fetchLoginFormDetails,
        args: [email, password, typeOfUser],
        onSucess: [login.type],
        loader: true,
      },
    })
  }

export const registerUser =
  (email: string, password: string, typeOfUser: string) => (dispatch: typeof store.dispatch) => {
    const userObj = {
      email,
      password,
      typeOfUser,
    }
    dispatch({
      type: apiCallBegan.type,
      payload: {
        apiMethod: registerUserDetails,
        args: [userObj],
        onSucess: [login.type],
        loader: true,
      },
    })
  }
