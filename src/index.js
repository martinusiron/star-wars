import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import MovieDetail from './components/MovieDetail'

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path="/" exact component={App}></Route>
            <Route path="/:id" exact component={MovieDetail}></Route>
        </div>
    </BrowserRouter>
    , document.getElementById('root'));
