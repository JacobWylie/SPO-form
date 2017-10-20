import React, { Component } from 'react';
// { reduxForm } allows component to communicate to formReducer
import { Field, reduxForm } from 'redux-form';

class Form extends Component {
	render() {
		return(
			<div>
				Insert Form Here
			</div>
		);
	}
}

// reduxForm() simliar to connect()
// 'form' = name of form
export default reduxForm({
	form: ''
})(Form);