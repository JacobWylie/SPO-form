import React, { Component } from 'react';
// Connects to reducers to pass data
import { connect } from 'react-redux';
// Action creator that GETs all users accounts
import { fetchAccounts } from '../actions';

class Accounts extends Component {
	render() {
		return (
			<div>
				Accounts
			</div>
		);
	}
}

// Wire up action creator so it's available to component
export default connect(null, { fetchAccounts })(Accounts);