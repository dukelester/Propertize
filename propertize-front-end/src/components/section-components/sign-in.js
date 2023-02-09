import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import FormData from 'form-data';
import API_HOST from '../../configs'

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const loginForm = new FormData();
  loginForm.append('username', username);
  loginForm.append('password', password);
  const handleSubmit = async (event) => {
	event.preventDefault();
	const response = await axios.post(`${API_HOST}/auth/login`, loginForm, {
		"headers": {
			"Content-Type": "application/json"
		}
	});
	console.log(response.data, response.data.access_token);
  }
  let publicUrl = process.env.PUBLIC_URL+'/'
  return (
  <div className="signin-page-area pd-top-100 ">
	<div className="container">
	<div className="row justify-content-center">
		<div className="col-xl-6 col-lg-7">
		<form className="signin-inner" method='post' onSubmit={handleSubmit}>
			<div className="row">
			<div className="col-12">
				<label className="single-input-inner style-bg-border">
				<input type="text" placeholder="Username" required
					onChange={ (e) => setUsername(e.target.value)}
				/>
				</label>
			</div>
			<div className="col-12">
				<label className="single-input-inner style-bg-border">
				<input type="password" placeholder="Password" required
					onChange={ (e) => setPassword(e.target.value)}
				/>
				</label>
			</div>
			<div className="col-12 mb-4">
				<button className="btn btn-base w-100" type='submit'>Sign In</button>
			</div>
			<div className="col-12">
				<a href="#">Forgotten Your Password</a>
				<a href="signup.html"><strong>Signup</strong></a>
			</div>
			</div>
		</form>
		</div>
	</div>
	</div>
</div>
)}

export default SignIn