import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Link, Route, Router} from 'react-router';
import {BrowserRouter} from 'react-router-dom'; 
import App from './App';
import * as serviceWorker from './serviceWorker';
import Home from './Home';
ReactDOM.render(<BrowserRouter>
<div>
    <Route path='/' component={App} />
    <Route path='/Home/:Number' component={Home}/> 
</div>
</BrowserRouter>,document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
