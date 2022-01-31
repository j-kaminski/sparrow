import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../redux/store';
import { WEBSOCKET_URL } from './socket.config';

export type SocketState = {
	connectionStatus: boolean;
};

const initialState: SocketState = {
	connectionStatus: false,
};

let sockets: any = {};
let socket: WebSocket | null = null;

export const connectWebSocket = createAsyncThunk(
	'socket/connect',
	async (chatName: string) => {
		// sockets[chatName] = new WebSocket(`${WEBSOCKET_URL}/${chatName}/`);
		socket = new WebSocket(`${WEBSOCKET_URL}/${chatName}/`);
		socket.onopen = () => {
			console.log('connected to socket');
			socket?.send(JSON.stringify({ command: 'fetch_messages' }));
		};
		socket.onmessage = (data: any) => {
			console.log('msg:', data.data);
		};
		socket.onerror = (error: any) => {
			console.log(error);
		};
		socket.onclose = () => {
			console.log('disconnected from socket');
		};
	}
);

export const sendMessage = createAsyncThunk(
	'socket/message',
	async (message: string) => {
		socket?.send(
			JSON.stringify({
				command: 'new_message',
				message: message,
				from: 'kuba',
			})
		);
	}
);

export const socketSlice = createSlice({
	name: 'socket',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(connectWebSocket.fulfilled, (state, action) => {});
		builder.addCase(sendMessage.fulfilled, (state, action) => {});
	},
});
