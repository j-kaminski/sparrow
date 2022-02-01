import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import * as serviceWorker from './serviceWorker';

const theme = createTheme({
	palette: {
		text: {
			// primary: '#FFFFFF',
		},
		primary: {
			main: '#FFBF00',
		},
		secondary: {
			main: '#464040',
		},
	},
});

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<App />
				</ThemeProvider>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorker.unregister();
