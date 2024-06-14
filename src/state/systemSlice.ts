import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loadingPage: true,
  currentSection: 'home',
}

export const systemSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {
    setLoadingPage: (state, action) => {
      state.loadingPage = action.payload
    },

    setCurrentSection: (state, action) => {
      state.currentSection = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const {
  setLoadingPage,
  setCurrentSection,
} = systemSlice.actions

export default systemSlice.reducer