import _ from 'lodash';
import React, { Component } from 'react';
// Connects to reducers to pass data
import { connect } from 'react-redux';
// Allows navigation between pages in app without http request
import { Link } from 'react-router-dom';
// Action creator that GETs all users accounts
import { fetchAccounts } from '../actions';

class Accounts extends Component {
	// Automatically fetchAccounts() as soon as component is rendered
	componentDidMount() {
		this.props.fetchAccounts();
	}

	// Helper function to render accounts to page
	renderAccounts() {
		// Accounts are now an object (not array) and require lodash _.map()
		return _.map(this.props.accounts, account => {
			return (
				// Unique key is account id
				<Link to="/" key={account._id}>
					<li className="account-name">
						{account.firstName}
					</li>
				</Link>
			)
		});
	}

	render() {
		return (
			// Show list of accounts
			<div className="accounts">
				<div>
					<h2>Accounts</h2>
					{/* Link back to home/create new account form */}
				</div>
				<ul>
					{this.renderAccounts()}
				</ul>
				<Link to="/" className="create-account-link">
						Create another account
				</Link>
			</div>
		);
	}
}

// To consume from application level state
function mapStateToProps(state) {
	return { accounts: state.accounts }
}

// Wire up action creator so it's available to component
export default connect(mapStateToProps, { fetchAccounts })(Accounts);