import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// Manually looks at the url and displays a different set of components on the 
// screen without a http request or screen refresh. Also, displays new URL.
// {BroswerRouter} interacts with the history library and decides what to do 
// based on a change in the URL.
// {Route} will show component on page depending on URL. 
// {Switch} will differentiate between routes. react-router = lazy routing
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Will handle async GET requests by axios
import promise from 'redux-promise';

import reducers from './reducers';
import Form from './components/form';
import Accounts from './components/accounts';
import Show from './components/show';

// Enables middleware use in app
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
    	<BrowserRouter>
    		{/* BrowserRouter can only have one child element... */}
    		<div>
    			{/* Allows specific routing without rendering all / routes */}
    			<Switch>
		    		{/* Show component based on user path/url */}
		    		<Route path="/accounts/:id" component={Show} />
		    		<Route path="/accounts" component={Accounts} />
		    		<Route path='/' component={Form} />
	    		</Switch>
    		</div>
    	</BrowserRouter>
	</Provider>
	, document.querySelector('.container'));
