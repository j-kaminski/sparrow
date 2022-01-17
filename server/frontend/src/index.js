import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './containers/Chat.js';
import WebSocketInstance from "./websocket";

class App extends React.Component {

    componentDidMount() {
        WebSocketInstance.connect();
    }

    render() {
        return (
            <Chat />
        );
    };
}

ReactDOM.render(<App />, document.getElementById('app'));