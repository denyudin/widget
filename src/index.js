import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';

export const init = (selector) => {
    ReactDOM.render(<App />, document.getElementById(selector || 'widgetplaceholder'));
};
