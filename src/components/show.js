import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAccount } from '../actions';

class Show extends Component {
	// Automatically fetchAccount() as soon as component is rendered
	componentDidMount() {
		// Retreive the :id's state from the URL for component to call upon from list of accounts in state
		// Pull id property off this.props.params and name variable 'id'
		const { id } = this.props.match.params;
		this.props.fetchAccount(id);
	}

	render() {
		// Makes component wait for account info to be received before trying to render to page
		if (!this.props.account) {
			return <div>Loading...</div>
		}

		// Destructuring for ease of use
		const { account } = this.props.account;

		return (
			<div className="account-show">
				<h2>Account</h2>
				<img  className="account-photo" src="https://picsum.photos/100?random" />
				<h3>First Name:</h3>
				<h4>{account.firstName}</h4>
				<h3>Last Name:</h3>
				<h4>{account.lastName}</h4>
				<h3>Username:</h3>
				<h4>{account.username}</h4>
				<h3>Email:</h3>
				<h4>{account.email}</h4>
			</div>
		);
	}
}

// Take the accounts out of application level state and into component
// Second argument is the props object specific to this component.
// Component will receive only one account from url 
// rather then returning entire list.
function mapStateToProps({ accounts } , ownProps) {
	return { account: accounts[ownProps.match.params._id] };
}

// Wire up action creator so it's available to component
export default connect(mapStateToProps, { fetchAccount })(Show);