import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  disable: false,
}

export const svgSlice = createSlice({
  name: 'svgDisable',
  initialState,
  reducers: {

    setDisableSVG: (state, action) => {
      state.disable = action.payload
    }

  },
})

// Action creators are generated for each case reducer function
export const {
  setDisableSVG
} = svgSlice.actions

export default svgSlice.reducer