import React, { Component } from 'react';
// { Field } interacts with redux-form. Does not render to page.
// { reduxForm } allows component to communicate to formReducer
import { Field, reduxForm } from 'redux-form';
// Allows navigation between pages in app without http request
import { Link } from 'react-router-dom';

class Form extends Component {
	// Returns JSX. 'field' argument contains all event handlers 
	// to connect to specific field
	renderField(field) {
		// Destructor field.meta object
		const { meta } = field;

		// CSS classes for each form field
		// includes error check to change form css if invalid user input 
		const inputClass = `form-input ${meta.touched && meta.error ? 'error-input': ''}`; 

		return (
			<div className="">
				{/* Form field paramaters passed to this component from each field */}
				{/*<label>{field.label}</label>*/}
				<input
					className={inputClass}
					placeholder={field.placeholder}
					type={field.type}
					// all object's properties available as props to input
					{...field.input}
				/>
				{/* Specific property on {field} for handling validation */}
				{/* 'touched' state is once a user interacts with input and focuses elsewhere */}
				<div className="error-text">
					{meta.touched ? meta.error : ''}
				</div>
			</div>
		)
	}

	// Helper function for form
	onSubmit(values) {

	}

	render() {
		// Pull handleSubmit function off reduxForm/this.props
		// es6 rename and destructure
		// es5 = var handleSubmit = this.props.handleSubmit
		const { handleSubmit } = this.props;

		return(
			// handleSubmit() will run reduxFrom/validation. If true will run
			// our helper function: onSubmit()
			// Bind onSubmit() callback to this component
			// noValidate removes HTML5 defaults 
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))} noValidate>
				<h2>Register New Account</h2>
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
				<button type="submit" className="">
					&#10003;
				</button>
				{/* Link to accounts */}
				<Link to="/accounts">
					View all accounts
				</Link>
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

	const regexName = /^[a-zA-Z]+$/;
	// First name validation
	if (!values.firstName) {
		errors.firstName = "Please enter a first name.";
	}
	if (!regexName.test(values.firstName)) {
		errors.firstName = 'First name may use upper or lowercase letters';
	}

	// Last name validation
	if (!values.lastName) {
		errors.lastName = "Please enter a last name.";
	}
	if (!regexName.test(values.lastName)) {
		errors.lastName = 'Last name may use upper or lowercase letters';
	}

	// Username Validation
	if (!values.username) {
		errors.username = "Please enter a username.";
	}
	const regexUsername = /^[a-z0-9\.\_]+$/
	if (!regexUsername.test(values.username)) {
		errors.username = 'Username may use lowercase letters, numbers, "." or "_"';
	}

	// Password Validation
	if (!values.password) {
		errors.password = "Please enter a password";
	}
	// Password must have a value before checking length or it throws an error
	if (values.password) {
		if (values.password.length <= 8) {
			errors.password = "Password must contain at least 8 characters"
		}
	}

	// Email Validation
	if (!values.email) {
		errors.email = "Please enter an email.";
	}
	const regexEmail = /\b[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,20}\b/gi;
	if (values.email) {
		if (!regexEmail.test(values.email)) {
			errors.email = 'Please enter a valid email e.g. "name@example.com"';
		}
	}
	// Return the object to redux-form
	// If object is returned empty, redux-form allows submit
	// If objec has any properties, from is invalid
	return errors;
}

// reduxForm() simliar to connect(). Passes additonal properties to our component
export default reduxForm({
	// Helper function passed to redux-form
	validate,
	// unique string to differentiate between forms
	form: 'NewAccountForm'
})(Form);























