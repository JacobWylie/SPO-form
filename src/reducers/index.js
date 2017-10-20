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
