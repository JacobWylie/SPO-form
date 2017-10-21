import React, { Component } from 'react';
// { Field } interacts with redux-form. Does not render to page.
// { reduxForm } allows component to communicate to formReducer
import { Field, reduxForm } from 'redux-form';

class Form extends Component {
	// Returns JSX. 'field' argument by convention that contains event handlers 
	// to connect to specific field
	renderField(field) {
		return (
			<div className="">
				{/* Form field paramaters passed to this component from each field */}
				<label>{field.label}</label>
				<input
					className=""
					placeholder={field.placeholder}
					type={field.type}
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
					label='First Name'
					name='firstName'
					placeholder='First Name'
					type='text'
					// Tells redux-form what to render to page.
					component={this.renderField}
				/>
				<Field
					label='Last Name'
					name='lastName'
					placeholder='Last Name'
					type='text'
					component={this.renderField}
				/>
				<Field
					label='Username'
					name='username'
					placeholder='Username'
					type='text'
					component={this.renderField}
				/>
				<Field
					label='Password'
					name='password'
					placeholder='Password'
					type='password'
					component={this.renderField}
				/>
				<Field
					label='Email'
					name='email'
					placeholder='Email'
					type='email'
					component={this.renderField}
				/>
			</form>
		);
	}
}

// Helper function for built-in redux-form form validation
// 'values' is an object containing form data
function validate(values) {
	// Create an empty object
	const errors = {};
	// Validate the inputs from {values}

	const regexName = /[^a-zA-Z]/
	// First name validation
	if (!values.firstName) {
		errors.firstName = "Please enter your first name.";
	}
	if (!regexName.test(values.firstName)) {
		errors.firstName = 'First name may contain upper or lowercase letters';
	}

	// Last name validation
	if (!values.lastName) {
		errors.lastName = "Please enter your last name.";
	}
	if (!regexName.test(values.lastName)) {
		errors.lastName = 'Last name may contain upper or lowercase letters';
	}

	// Username Validation
	if (!values.username) {
		errors.username = "Please enter your username.";
	}
	const regexUsername = /[^a-z0-9\.\_]/
	if (!regexUsername.test(values.username)) {
		errors.username = 'Username may contain lowercase letters, numbers, ".", and "_"';
	}

	// Password Validation
	if (!values.password) {
		errors.password = "Please enter a password";
	}
	if (values.password.length <= 8) {
		errors.password = "Password must contain at least 8 characters"
	}

	// Email Validation
	if (!values.email) {
		errors.email = "Please enter your email.";
	}
	const regexEmail = /\b[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,20}\b/gi;
	if (!regexEmail.test(values.email)) {
		errors.email = 'Please enter a valid email e.g. "name@example.com"';
	}
	// Return the object to redux-form
	// If object is returned empty, redux-form allows submit
	// If objec has any properties, from is invalid
	return errors;
}

// reduxForm() simliar to connect()
export default reduxForm({
	// Helper function passed to redux-form
	validate,
	// unique string to differentiate between forms
	form: 'NewAccountForm'
})(Form);























