const apiUrl = "http://127.0.0.1:8000";

class UserService {

	static VerificationToken () {
		if ((new Date() - new Date(localStorage.getItem("TokenUserExpiracy")))/60000 > 59) {
			localStorage.removeItem("TokenUser");
			localStorage.removeItem("TokenUserExpiracy");
		}
		if(localStorage.getItem("TokenUser") === null){
			return 1;
		}
		return null;
	}
	
	// Connexion
	static async authenticate (body) {
		let init = {
			method : "POST",
			headers : {
				'Content-Type': 'application/json',
				//'Access-Control-Allow-Origin' : '*',
				//'Accept': 'application/json',
			},
			body: JSON.stringify(body),
		}
		let call = await fetch(`${apiUrl}/login_check`, init)
		return call;
	}

	// register
	static async register (body) {
		let init = {
			method : "POST",
			headers : {
				'Content-Type': 'application/json',
				//'Access-Control-Allow-Origin' : '*',
				//'Accept': 'application/json',
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
				//'Access-Control-Allow-Origin' : '*',
				//'Accept': 'application/json',
			},
			body: JSON.stringify(body),
		}
		let call = await fetch(`${apiUrl}/profile`, init)
		return call;
	}

}

export default UserService;