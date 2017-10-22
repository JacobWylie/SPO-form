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
		return (
			<div className="account-show">
				<h2>Account</h2>
			</div>
		);
	}
}

// Take the accounts out of application level state and into component
// Second argument is the props object specific to this component.
// Component will receive only one account from url 
// rather then returning entire list.
function mapStateToProps({ accounts, ownProps }) {
	return { account: accounts[ownProps.match.params.id] };
}

// Wire up action creator so it's available to component
export default connect(mapStateToProps, { fetchAccount })(Show);