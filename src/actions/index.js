// Handles AJAX requests
import axios from 'axios';

export const FETCH_ACCOUNTS = 'fetch_accounts';
export const CREATE_ACCOUNT = 'create_account';

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
export function createAccount(values) {
	// POST to api with form values
	const request = axios.post(ROOT_URL, values);

	return {
		type: CREATE_ACCOUNT,
		payload: request
	};
}