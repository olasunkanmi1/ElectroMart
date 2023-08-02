import { configureStore } from '@reduxjs/toolkit'
import { layoutReducer, filterReducer, productsReducer } from './slices'

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    filter: filterReducer,
    products: productsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;