import { createSlice } from '@reduxjs/toolkit'
type State = {
  loading: boolean
}

const slice = createSlice({
  name: 'loader',
  initialState: {
    loading: false,
  },
  reducers: {
    startLoader: (state: State) => {
      state.loading = true
    },
    stopLoader: (state) => {
      state.loading = false
    },
  },
})

export const { startLoader, stopLoader } = slice.actions

export default slice.reducer
