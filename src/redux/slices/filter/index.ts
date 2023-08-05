import {
  createAsyncThunk,
  createSlice,
  createAction,
  PayloadAction,
} from '@reduxjs/toolkit';
import { FilterState } from '@types';

const initialState: FilterState = {
  category: '',
  brand: '',
  rating: '',
  sort: 'featured',
  discount: '',
}

export const {
  reducer: filterReducer,
  actions: { handleFilterChange, resetState },
} = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    handleFilterChange: (
      state,
      {
        payload: { name, value },
      }: PayloadAction<{ name: string; value: string }>
    ) => {
      state[name as keyof FilterState] = value;
    },
    resetState: (state) => {
      state.category = '';
      state.brand = '';
      state.rating = '';
      state.sort = 'featured';
      state.discount = '';
    },
  },
  extraReducers: (builder) => {},
});
