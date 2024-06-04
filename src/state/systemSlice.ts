import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loadingPage: true,
}

export const systemSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {
    setLoadingPage: (state, action) => {
      state.loadingPage = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const {
  setLoadingPage,
} = systemSlice.actions

export default systemSlice.reducer