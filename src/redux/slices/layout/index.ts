import { createAsyncThunk, createSlice, createAction, PayloadAction } from "@reduxjs/toolkit";
import {LayoutState} from '@types'

// export const handleNavbarDropdown = createAction("layout/navbarDropdown");

export const { reducer: layoutReducer, 
    actions: { 
        handleNavbarDropdown, 
        handleFilterDropdown, 
        handleProductLayout,
        handleProductLoading
    } 
} = createSlice({
    name: 'layout',
    initialState: {
        navbarDropdown: '',
        filterDropdown: '',
        sidebar: false,
        isList: false,
        productLoading: false,
    } as LayoutState,
    reducers: {
        handleNavbarDropdown: (state, {payload}: PayloadAction<string>) => {
            state.navbarDropdown = state.navbarDropdown === payload ? '' : payload;
        },
        handleFilterDropdown: (state, {payload}: PayloadAction<string>) => {
            state.filterDropdown = state.filterDropdown === payload ? '' : payload;
        },
        handleProductLayout: (state, {payload}: PayloadAction<boolean>) => {
            state.isList = payload;
        },
        handleProductLoading: (state, {payload}: PayloadAction<boolean>) => {
            state.productLoading = payload;
        }
    },
    extraReducers: (builder) => {
        // builder.addCase(handleNavbarDropdown, (state) => {
        //     state.navbarDropdown = !state.navbarDropdown;
        // });
    }
});