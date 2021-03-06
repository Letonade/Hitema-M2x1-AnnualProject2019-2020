import {connect} 					from 'react-redux';
import React, { Component } 		from 'react';

import UserService					from '../../services/user.service';

class LoginApp extends Component{

	state = {
		email: '',
		password:'',
		button: '',
//		adresseApi: 'http:/\/192.168.1.58:8000',

		success: false,
		error: false,
		processing: false,
	}

	changeForm(e){
		this.setState(
			{[e.target.id]: e.target.value}
		)
	}

	validateForm(){
		let{email, password} = this.state;
		return email.length > 0 && password.length > 0;
	}

	async handleSubmit(e){
		this.setState({success: false, error: false, processing: true});
		e.preventDefault();
		let {email, password, button} = this.state;
		let response;
		if (button === 'signIn')
			{response = await UserService.register({'_username': email, '_password': password});}
		response = await UserService.authenticate({'username': email, 'password': password});
		if (response.ok) {
			this.setState({success: true, error: false, processing: false});
			this.props.history.push('/', /*OBJ*/);
		}else{
			return (this.setState({success: false, error: true, processing: false}));
		}
	}

	componentDidMount() {
			//if (localStorage.getItem("TokenUserExpiracy") ) {}
		if(localStorage.getItem("TokenUser") != null)
			this.props.history.push('/', /*OBJ*/);
	}

  	render() {
		let {error, success, processing} = this.state;
		return (
			<div className="LoginApp" style= {{"paddingTop": "100px"}} >
				<div className="container LoginCenter">
					<div className="d-flex justify-content-center h-100">
						<div className="card">
							<div className="card-header">
								<h3>Sign In</h3>
							</div>
							<div className="card-body">
								<form onSubmit={(e) => this.handleSubmit(e)}>
									<div className="input-group form-group">
										<div className="input-group-prepend">
											<span className="input-group-text"><i className="fas fa-user"></i></span>
										</div>
										<input id="email" className='form-control' pattern="^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$" type="email" placeholder="Email" required onChange={(e) => this.changeForm(e)}/>
									</div>

									<div className="input-group form-group">
										<div className="input-group-prepend">
											<span className="input-group-text"><i className="fas fa-key"></i></span>
										</div>
										<input id="password" className='form-control' pattern="(?=.{0,19}$)(?=\w{0,19})(?=.*[A-Z])(?=.*\d)([\w]{2,})$" type="password" placeholder="password" required onChange={(e) => this.changeForm(e)}/>
									</div>
									<button onClick={(e) => this.setState({button : "logIn"})} className="btn btn-outline-info btn-rounded btn-block my-2 waves-effect z-depth-0" disabled={!this.validateForm()} type="submit" >Log in</button>
									<button onClick={(e) => this.setState({button : "signIn"})} className="btn btn-outline-warning btn-rounded btn-block my-2 waves-effect z-depth-0" disabled={!this.validateForm()} type="submit" >Sign in</button>
								</form>
							</div>
							<div className="card-footer">
								<div className="d-flex justify-content-center links">
									{processing && 
										<div className="text-center">Processing
											<span className="ml-3 spinner-dots">
												<span className="dot1"></span>
												<span className="dot2"></span>
												<span className="dot3"></span>
											</span>
										</div>}
									{success && <div>Success</div>}
									{error && <div>Errors</div>}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
  	}
}

const mapStateToProps = (state) => ({
	Authentification: state.Authentification,
})

const mapDispatchToProps = (dispatch) => {
	return{
		LogInMemory: (email, password, token, adresseApi) => { 
			dispatch({
				type: 'KEEP_LOGIN', 
				email: email, 
				password: password, 
				token: token, 
				adresseApi: adresseApi,
			})
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginApp);


/*	A regex explanation

^[@#](?=.{7,13}$)(?=\w{7,13})(?=[^aeiou_]{7,13})(?=.*[A-Z])(?=.*\d)$
Ce qui donne

^[@#] Starts with @ or #
(?=.{7,13}$) Length of password should be between range 8 to 14
(?=\w{7,13}) It should be alphanumeric.
(?=[^aeiou_]{7,13}) It should not contain any vowel a,e,i,o,u letters or underscore which is matched by \w
(?=.*[A-Z]) Password should contains a Capital letter
(?=.*\d) It should be alphanumeric so it should contain a digit

Nos règles
Password
(?=.{0,19}$)(?=\w{0,19})(?=.*[A-Z])(?=.*\d)([\w]{2,})$
Mail
(?=.{0,99}$)(?=.*@)(?=.*.) -> devient: (plus élaboré)
^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$
*/