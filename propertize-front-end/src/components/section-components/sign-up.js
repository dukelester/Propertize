import React, { useState } from 'react';
import FormData from 'form-data';

import axios from 'axios';

import API_HOST from '../../configs'
import { Link, useHistory } from 'react-router-dom';

const SignUp = () => {
	const history = useHistory();
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	const registerForm = new FormData();
	registerForm.append('username', username);
	registerForm.append('email', email);
	registerForm.append('phone', phone);
	registerForm.append('password', password);
	registerForm.append('firstName', firstName);
	registerForm.append('lastName', lastName);

	const handleSubmit = async (event) => {
	  event.preventDefault();
	  try {
	    const response = await axios.post(`${API_HOST}/auth/register`, registerForm,
		{ 'headers': {
			'Content-Type': 'application/json',
		}});
		if (response.status === 201) {
			console.log('success registration');
			history.push('/sign-in');
		}
	  } catch (error) {
		console.log(error);
	  };
	}
  return (
	<div className="signup-page-area pd-top-100">
	<div className="container">
	<div className="row justify-content-center">
		<div className="col-xl-6 col-lg-7">
		<form className="signin-inner" method='POST' onSubmit={handleSubmit}>
			<div className="row">
			<div className="col-12">
				<label className="single-input-inner style-bg-border">
				<input type="text" placeholder="First Name" required
					onChange={ (e) => setFirstName(e.target.value) }
				/>
				</label>
			</div>
			<div className="col-12">
				<label className="single-input-inner style-bg-border">
				<input type="text" placeholder="Last Name" required
					onChange={ (e) => setLastName(e.target.value) }
				/>
				</label>
			</div>
			<div className="col-12">
				<label className="single-input-inner style-bg-border">
				<input type="text" placeholder="Username" required
					onChange={ (e) => setUsername(e.target.value) }
				/>
				</label>
			</div>
			<div className="col-12">
				<label className="single-input-inner style-bg-border">
				<input type="email" placeholder="Email" required
					onChange={ (e) => setEmail(e.target.value) }
				/>
				</label>
			</div>
			<div className="col-12">
				<label className="single-input-inner style-bg-border">
				<input type="text" placeholder="Phone Number" required
					onChange={ (e) => setPhone(e.target.value) }
					min={10}
					max={12}
				/>
				</label>
			</div>
			<div className="col-12">
				<label className="single-input-inner style-bg-border">
				<input type="password" placeholder="Password" required
					onChange={ (e) => setPassword(e.target.value) }
					min={6}
				/>
				</label>
			</div>
			<div className="col-12 mb-4">
				<button className="btn btn-base w-100" type='submit'>Create Account</button>
			</div>
			<div className="col-12">
				<span>By creating an account </span>
				<Link to='sign-in'><strong> Signin</strong></Link>
			</div>
			</div>
		</form>
		</div>
	</div>
	</div>
</div>

)}

export default SignUp