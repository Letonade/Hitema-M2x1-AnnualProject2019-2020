const apiUrl = "http://192.168.1.63:8000";

class UserService {

	static VerificationToken () {
		if ((new Date() - new Date(localStorage.getItem("TokenTalentUpApiReactExpiracy")))/60000 > 59) {
			localStorage.removeItem("TokenTalentUpApiReact");
			localStorage.removeItem("TokenTalentUpApiReactExpiracy");
		}
		if(localStorage.getItem("TokenTalentUpApiReact") === null){
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
				'Accept': 'application/json',
			},
			body: JSON.stringify(body),
		}

		let call = await fetch(`${apiUrl}/login_check`, init)
		return call;
	}

}

export default UserService;