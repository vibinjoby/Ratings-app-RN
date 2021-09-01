import { createSlice } from '@reduxjs/toolkit'
import {
  fetchLoginFormDetails,
  registerUserDetails,
  socialAuthentication,
} from '../../network/AuthService'

import { decodeToken } from '../../utilities/helpers'
import { apiCallBegan } from '../actions/api'
import { store } from '../index'

type UserInfo = {
  phoneNum: string
  email: string
  fullName: string
  id: string
  iat: any
  typeOfUser: string
}
export type AuthState = {
  userInfo: UserInfo
  token: string
  resetPwd: Record<string, unknown>
  errorCode?: number
}

const initialState = {
  userInfo: {
    phoneNum: '',
    email: '',
    fullName: '',
    id: '',
    iat: '',
    typeOfUser: '',
  },
  token: '',
  resetPwd: { email: '', token: '' },
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

export const socialLoginUser =
  (token: string, socialType: string, typeOfUser: string) => (dispatch: typeof store.dispatch) => {
    dispatch({
      type: apiCallBegan.type,
      payload: {
        apiMethod: socialAuthentication,
        args: [token, socialType, typeOfUser],
        onSucess: [login.type],
        loader: false,
      },
    })
  }

export const registerUser =
  (fullName: string, email: string, password: string, typeOfUser: string) =>
  (dispatch: typeof store.dispatch) => {
    const userObj = {
      fullName,
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
