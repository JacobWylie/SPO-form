import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// {BroswerRouter} interacts with the history library and decides what to do 
// based on a change in the URL.
// {Route} will show component on page depending on URL. 
import { BroswerRouter, Route } from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
    	<BroswerRouter>
    		{/* BrowserRouter can only have one child element... */}
    		<div>
	    		{/* Show component based on user path/url */}
	    		<Route path="" component={} />
	    		<Route path="" component={} />
    		</div>
    	</BroswerRouter>
	</Provider>
	, document.querySelector('.container'));
