import React, { Component } from 'react';
// { Field } interacts with redux-form. Does not render to page.
// { reduxForm } allows component to communicate to formReducer
import { Field, reduxForm } from 'redux-form';

class Form extends Component {
	// Returns JSX. 'field' argument by convention that contains event handlers 
	// to connect to specific field
	renderFirstNameField(field) {
		return (
			<div>
				<input
					type="text"
					// all object's properties available as props to input
					{...field.input}
				/>
			</div>
		)
	}

	render() {
		return(
			<form>
				<Field
					firstName='firstName'
					// Tells redux-form what to render to page.
					component={this.renderFirstNameField}
				/>
			</form>
		);
	}
}

// reduxForm() simliar to connect()
// unique string to differentiate between forms
export default reduxForm({
	form: 'NewAccountForm'
})(Form);