// Handles AJAX requests
import axios from 'axios';

export const FETCH_ACCOUNTS = 'fetch_accounts';

// API created for user accounts. Hooked up to mLab.
const ROOT_URL = 'https://www.jacobwylie.com/api';

// Get users from db and return payload from the action
export function fetchAccounts() {
	const request = axios.get(`${ROOT_URL}/accounts`);

	return {
		type: FETCH_ACCOUNTS,
		payload: request
	};
}