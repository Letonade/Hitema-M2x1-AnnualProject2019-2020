const apiUrl = "http://192.168.1.58:8000";

class TalentService {
	
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

export default TalentService;