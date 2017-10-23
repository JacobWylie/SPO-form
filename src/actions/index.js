// Handles AJAX requests
import axios from 'axios';

export const FETCH_ACCOUNTS = 'fetch_accounts';
export const CREATE_ACCOUNT = 'create_account';
export const FETCH_ACCOUNT = 'fetch_account';
export const DELETE_ACCOUNT = 'delete_account';

// API created for user accounts. Hooked up to mLab.
const ROOT_URL = 'https://www.jacobwylie.com/api/accounts';

// Get accounts from db and return payload from the action
export function fetchAccounts() {
	const request = axios.get(ROOT_URL);

	return {
		type: FETCH_ACCOUNTS,
		payload: request
	};
}

// POST new account to db
// callback (this.props.history.push('/accounts') pass from Form
export function createAccount(values, callback) {
	// POST to api with form values
	const request = axios.post(ROOT_URL, values)
		// after request is complete, call callback function (this.props.history.push('/accounts'))
		// which navigate to accounts after new account is created
		.then(() => callback());

	return {
		type: CREATE_ACCOUNT,
		payload: request
	};
}

// Action creator to fetch a specific account :id
export function fetchAccount(id) {
	const request = axios.get(`${ROOT_URL}/${id}`);

	return {
		type: FETCH_ACCOUNT,
		payload: request
	};
}

// Action creator to delete an account with :id
// payload does not need to return the account info. just the id so
// the reducer can remove it from app level state
// Callback so navigation to /accounts does not happen until account is deleted
export function deleteAccount(id, callback) {
	const request = axios.delete(`${ROOT_URL}/${id}`)
		.then(() => callback());

	return {
		type: DELETE_ACCOUNT,
		payload: id
	};
}




















