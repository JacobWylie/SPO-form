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
					// Tells redux-form what to render to page.
					component={this.renderField}
				/>
				<Field
					label='Username'
					name='username'
					placeholder='Username'
					type='text'
					// Tells redux-form what to render to page.
					component={this.renderField}
				/>
				<Field
					label='Password'
					name='password'
					placeholder='Password'
					type='password'
					// Tells redux-form what to render to page.
					component={this.renderField}
				/>
				<Field
					label='Email'
					name='email'
					placeholder='Email'
					type='email'
					// Tells redux-form what to render to page.
					component={this.renderField}
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























