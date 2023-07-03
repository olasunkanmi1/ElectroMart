import { createAsyncThunk, createSlice, createAction, PayloadAction } from "@reduxjs/toolkit";
import {LayoutState} from '@types'

// export const handleNavbarDropdown = createAction("layout/navbarDropdown");

export const { reducer: layoutReducer, actions: { handleNavbarDropdown } } = createSlice({
    name: 'layout',
    initialState: {
        navbarDropdown: '',
    } as LayoutState,
    reducers: {
        handleNavbarDropdown: (state, {payload}: PayloadAction<string>) => {
            state.navbarDropdown = state.navbarDropdown === payload ? '' : payload;
        }
    },
    extraReducers: (builder) => {
        // builder.addCase(handleNavbarDropdown, (state) => {
        //     state.navbarDropdown = !state.navbarDropdown;
        // });
    }
});