import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// {BroswerRouter} interacts with the history library and decides what to do 
// based on a change in the URL.
// {Route} will show component on page depending on URL. 
import { BrowserRouter, Route } from 'react-router-dom';
// Will handle async GET requests by axios
import promise from 'redux-promise';

import reducers from './reducers';
import Accounts from './components/accounts';

// Enables middleware use in app
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
    	<BrowserRouter>
    		{/* BrowserRouter can only have one child element... */}
    		<div>
	    		{/* Show component based on user path/url */}
	    		<Route path="/accounts" component={Accounts} />
    		</div>
    	</BrowserRouter>
	</Provider>
	, document.querySelector('.container'));
