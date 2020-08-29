const apiUrl = "http://127.0.0.1:8000/game";

class OrganisatorService {

	// register

	static async create_campagne (body) {
		let init = {
			method : "POST",
			headers : {
				'Authorization': 'Bearer ' + localStorage.getItem("TokenUser"),
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		}
		let call = await fetch(`${apiUrl}/create_campagne`, init)
		return call;
	}

	static async create_game (body) {
		let init = {
			method : "POST",
			headers : {
				'Authorization': 'Bearer ' + localStorage.getItem("TokenUser"),
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		}
		let call = await fetch(`${apiUrl}/create_game`, init)
		return call;
	}

	
}

export default OrganisatorService;