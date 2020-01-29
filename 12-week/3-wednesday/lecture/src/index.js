import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutUs from './Components/AboutUs';
import BaseLayout from './Components/BaseLayout';
import PostDetails from './Components/PostDetails'

ReactDOM.render(
<BrowserRouter>
    <BaseLayout>
        <Switch>
            <Route exact path = "/" component = {App} />
            <Route path = "/about" component = {AboutUs} />
            <Route path = "/posts" component = {PostDetails} />
        </Switch>
    </BaseLayout>
</BrowserRouter>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
