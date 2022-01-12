import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../redux/store';

export type AuthState = {
	authenticated: boolean;
};

const initialState: AuthState = {
	authenticated: false,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		tempToggleAuth(state) {
			state.authenticated = !state.authenticated;
		},
	},
	extraReducers: (builder) => {},
});

export const { tempToggleAuth } = authSlice.actions;

export const authSelector = (state: RootState) => state.auth.authenticated;

export default authSlice.reducer;
