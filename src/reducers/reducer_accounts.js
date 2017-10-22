import _ from 'lodash';
import { FETCH_ACCOUNTS } from '../actions';
import { FETCH_ACCOUNT } from '../actions';

// Receive previous accounts state and modify on request
// Default state is empty object
export default function(state = {}, action) {
	switch (action.type) {

	// When one account is called, add to state
	// Spread operator will take all previously called accounts in state and add them
	// to a new object with newly called on account. This is so we don't lose all accounts
	// already stored in state.
	case FETCH_ACCOUNT:
		// ES5 syntax to update state when fetching an account
		// const account = action.payload.data.accounts;
		// const newState = { ...state,  };
		// newState[account.id] = account;
		// return newState;

		// ES6 syntax to do the same as above
		// Key interpolation: [make a new key on this object with this value] and
		// set it's value to : whatever is here.
		return { ...state, [action.payload.data.accounts._id]: action.payload.data.accounts };

	// Handles all accounts from axios and adds to state
	// Use lodash .mapKeys() to take a property out of an array record and create
	// an object where the id is the key and the value is the account info.
	case FETCH_ACCOUNTS:
		return _.mapKeys(action.payload.data.accounts, '_id');

	// Catch default and return state
	default:
		return state;
	}
}