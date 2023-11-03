import { configureStore } from '@reduxjs/toolkit'
// basketReducer
import basketReducer from '../slices/basketSlice'

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
})
