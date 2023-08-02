import {
  createAsyncThunk,
  createSlice,
  createAction,
  PayloadAction,
} from '@reduxjs/toolkit';
import { FilterState } from '@types';

export const {
  reducer: filterReducer,
  actions: { handleFilterChange },
} = createSlice({
  name: 'layout',
  initialState: {
    category: '',
    brand: '',
    rating: '',
    sort: '',
    discount: '',
  } as FilterState,
  reducers: {
    handleFilterChange: (
      state,
      {
        payload: { name, value },
      }: PayloadAction<{ name: string; value: string }>
    ) => {
      state[name as keyof FilterState] = value;
    },
  },
  extraReducers: (builder) => {},
});
