import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../redux/store';

export type AuthState = {
	authenticated: boolean;
};

const initialState: AuthState = {
	authenticated: false,
};

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {},
	extraReducers: (builder) => {},
});

export const authSelector = (state: RootState) => state.auth.authenticated;

export default counterSlice.reducer;
