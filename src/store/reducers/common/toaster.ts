import { createSlice } from '@reduxjs/toolkit'

type State = {
  isSuccess: boolean
  toastMessage: string
}

const slice = createSlice({
  name: 'toaster',
  initialState: {
    isSuccess: false,
    toastMessage: '',
  },
  reducers: {
    successToast: (state: State, action) => {
      state.isSuccess = true
      state.toastMessage = action.payload.message
    },
    errorToast: (state: State, action) => {
      state.isSuccess = false
      state.toastMessage = action.payload.message
    },
    resetToastMessage: (state: State, _) => {
      state.toastMessage = ''
    },
  },
})

export const { successToast, errorToast, resetToastMessage } = slice.actions

export default slice.reducer
