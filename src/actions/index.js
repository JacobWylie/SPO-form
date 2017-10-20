// Handles AJAX requests
import axios from 'axios';

export const FETCH_ACCOUNTS = 'fetch-accounts';

// Get users from db
export function fetchAccounts() {
	const request = axios.get('https://www.jacobwylie.com/api/accounts');

	return {
		type: FETCH_ACCOUNTS
	};
}