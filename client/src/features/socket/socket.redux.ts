import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../redux/store';
import { WEBSOCKET_URL } from './socket.config';

export type SocketState = {
	connectionStatus: boolean;
};

const initialState: SocketState = {
	connectionStatus: false,
};
let socket: WebSocket | null = null;

export const connectWebSocket = createAsyncThunk('socket/connect', async () => {
	socket = new WebSocket(WEBSOCKET_URL);
	socket.onopen = () => {
		console.log('connected to socket');
	};
	socket.onmessage = (data: any) => {
		console.log('msg:', data);
	};
	socket.onerror = (error: any) => {};
	socket.onclose = () => {
		console.log('disconnected from socket');
	};
});

export const socketSlice = createSlice({
	name: 'socket',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(connectWebSocket.fulfilled, (state, action) => {});
	},
});
