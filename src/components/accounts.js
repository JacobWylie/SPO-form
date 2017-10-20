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
		return _.map(this.props.accounts, account=> {
			return (
				// Unique key required
				<li key={post.id}>
					{post.id}
				</li>
			)
		});
	}

	render() {
		return (
			// Show list of accounts
			<div>
				<div>
					{/* Link back to home/create new account form */}
					<Link to="/">
						Create another account
					</Link>
				</div>
				<h3>Accounts</h3>
				<ul>
					{this.renderAccounts()}
				</ul>
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