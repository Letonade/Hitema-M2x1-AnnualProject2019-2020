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

	// register
	static async addAvatar (body) {
		let init = {
			method : "POST",
			headers : {
				'Content-Type': 'application/json',
				//'Access-Control-Allow-Origin' : '*',
				'Accept': 'application/json',
			},
			body: JSON.stringify({
				"image": {
					"name" : 4,
					"value" : "data:image/jpeg;base64,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",
					"id" : 4
				}
			}),
		}
		let call = await fetch(`${apiUrl}/addAvatar`, init)
		return call;
	}


}

export default UserService;