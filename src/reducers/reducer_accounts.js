import _ from 'lodash';
import { FETCH_ACCOUNTS } from '../actions';

// Receive previous accounts state and modify on request
// Default state is empty object
export default function(state = {}, action) {
	switch (action.type) {
	// Handles new incoming accounts
	// Use lodash .mapKeys() to take a property out of an array record and create
	// an object where the id is the key and the value is the account info.
	case FETCH_ACCOUNTS:
		return _.mapKeys(action.payload.data.accounts, '_id');
	// Catch default and return state
	default:
		return state;
	}
}