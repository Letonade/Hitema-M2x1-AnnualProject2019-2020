const apiUrl = "http://127.0.0.1:8000";

class UserService {

	static async VerificationToken () {
		if ((new Date() - new Date(localStorage.getItem("TokenUserExpiracy")))/60000 > 59) {
			localStorage.removeItem("TokenUser");
			localStorage.removeItem("TokenUserExpiracy");
			let response = await UserService.authenticate(
				{'username': localStorage.getItem("TokenAuthMail"), 
				'password': localStorage.getItem("TokenAuthPassword")});
		}
		//if(localStorage.getItem("TokenUser") === null){return 1;}
		return null;
	}

	//déconnexion
	static async Deconnexion () {
		return localStorage.clear();
	}
	
	// Connexion
	static async authenticate (body) {
		let init = {
			method : "POST",
			headers : {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		}
		let call = await fetch(`${apiUrl}/login_check`, init)
		// traitement de la reception
		if (call.ok) {
			const json = await call.json();
			if (json.token){
				localStorage.setItem("TokenAuthMail",body.username);
				localStorage.setItem("TokenAuthPassword",body.password);
				localStorage.setItem("TokenUser",json.token);
				localStorage.setItem("TokenUserExpiracy",new Date());
			}
			else{return {ok : false}}
		}else
		{return {ok : false}}

		return call;
	}

	// register
	static async register (body) {
		let init = {
			method : "POST",
			headers : {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		}
		let call = await fetch(`${apiUrl}/register`, init)
		return call;
	}

	// Ajout d'avatar
	static async addAvatar (body) {
		let init = {
			method : "POST",
			headers : {
				'Authorization': 'Bearer ' + localStorage.getItem("TokenUser"),
				'Content-Type': 'application/json',
				//'Access-Control-Allow-Origin' : '*',
				//'Accept': 'application/json',
			},
			body: JSON.stringify(body),
		}
		let call = await fetch(`${apiUrl}/addAvatar`, init)
		return call;
	}


	static async getProfil (body) {
		let init = {
			method : "POST",
			headers : {
				'Authorization': 'Bearer ' + localStorage.getItem("TokenUser"),
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		}
		let call = await fetch(`${apiUrl}/profile`, init)
		// traitement de la reception
		if (call.ok) {
			const json = await call.json();
			let {mail, avatar} = json.data;
			localStorage.setItem("ProfilMail",mail);
			localStorage.setItem("ProfilAvatar",avatar);
		}else
		{return {ok : false}}

		return call;
	}
	
/*	// OLDConnexion
	static async OLDauthenticate (body) {
		let init = {
			method : "POST",
			headers : {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		}
		let call = await fetch(`${apiUrl}/login_check`, init)
		return call;
	}*/

}

export default UserService;