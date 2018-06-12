import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import FullPageReact from "./containers/FullPageReact";

ReactDOM.render(<FullPageReact />, document.getElementById('root'));
registerServiceWorker();
