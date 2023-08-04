import { createAsyncThunk, createSlice, createAction, PayloadAction } from "@reduxjs/toolkit";
import {LayoutState} from '@types'

// export const handleNavbarDropdown = createAction("layout/navbarDropdown");

export const { reducer: layoutReducer, 
    actions: { 
        handleNavbarDropdown, 
        handleFilterDropdown, 
        handleProductLayout,
        handleProductLoading,
        handlePageLoading,
        handleSidebar,
        handleMobileFilter
    } 
} = createSlice({
    name: 'layout',
    initialState: {
        navbarDropdown: '',
        filterDropdown: '',
        sidebar: false,
        isList: false,
        productLoading: false,
        pageLoading: true,
        mobileFilter: false,
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
        handleSidebar: (state, {payload}: PayloadAction<boolean>) => {
            state.sidebar = payload;
        },
        handlePageLoading: (state, {payload}: PayloadAction<boolean>) => {
            state.pageLoading = payload;
        },
        handleProductLoading: (state, {payload}: PayloadAction<boolean>) => {
            state.productLoading = payload;
        },
        handleMobileFilter: (state, {payload}: PayloadAction<boolean>) => {
            state.mobileFilter = payload;
        }
    },
    extraReducers: (builder) => {
        // builder.addCase(handleNavbarDropdown, (state) => {
        //     state.navbarDropdown = !state.navbarDropdown;
        // });
    }
});