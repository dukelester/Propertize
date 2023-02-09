import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import FormData from 'form-data';
import API_HOST from '../../configs'
import { AuthContext } from '../../context/AuthContext';

const SignIn = () => {
  const history = useHistory();
  const { loading, error, dispatch } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const loginForm = new FormData();
  loginForm.append('username', username);
  loginForm.append('password', password);
  const handleSubmit = async (event) => {
	event.preventDefault();
	dispatch({ type: 'LOGIN_START' });
	try {
		const response = await axios.post(`${API_HOST}/auth/login`, loginForm, {
			"headers": {
				"Content-Type": "application/json"
			}
		});
		dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
		console.log(response.data)
		history.push('/');
	} catch (error) {
		console.log(error);
		dispatch({ type: 'LOGIN_FAIL', payload: error.response.data })
	};
  }

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