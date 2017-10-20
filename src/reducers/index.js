import { combineReducers } from 'redux';
import AccountsReducer from './reducer_accounts';

const rootReducer = combineReducers({
	accounts: AccountsReducer
});

export default rootReducer;
