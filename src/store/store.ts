import counterReducer from '@/state/counterSlice'
import systemReducer from '@/state/systemSlice'
import svgReducer from '@/state/disableSVG'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    system: systemReducer,
    svgDisable: svgReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch