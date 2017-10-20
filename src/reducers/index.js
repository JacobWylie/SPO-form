import { combineReducers } from 'redux';
// Imports a reducer from the redux-form library and hook it up to our combineReducers().
// Redux-form uses this instance to handle state produced by form.
// Rename property to avoid confusion.
import { reducer as formReducer } from 'redux-form';
import AccountsReducer from './reducer_accounts';

const rootReducer = combineReducers({
	accounts: AccountsReducer,
	form: formReducer
});

export default rootReducer;



/////////////////////////
// redux-form process
/////////////////////////

// Identify different pieces of form state =>
// Make one 'Field' component per piece of state => 
// User changes a 'Field' input =>
// redux-form automatically handles changes =>
// User submits form =>
// App validates inputs and handles form submittal 