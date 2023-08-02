import { createAsyncThunk, createSlice, createAction, PayloadAction } from "@reduxjs/toolkit";
import {ProductsState} from '@types'

export const { reducer: productsReducer, 
    actions: { 
        handleProducts
    } 
} = createSlice({
    name: 'layout',
    initialState: {
        products: []
    } as ProductsState,
    reducers: {
        handleProducts: (state, {payload}: PayloadAction<ProductsState['products']>) => {
            state.products = payload;
        },
    },
    extraReducers: (builder) => {

    }
});