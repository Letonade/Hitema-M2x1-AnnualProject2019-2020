const apiUrl = "http://127.0.0.1:8000/game";

class OrganisatorService {

	// register

	static async createCampagne (body) {
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

	static async createGame (body) {
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

	static async getCalandar (body) {
		let init = {
			method : "GET",
			headers : {
				'Authorization': 'Bearer ' + localStorage.getItem("TokenUser"),
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		}
		let call = await fetch(`${apiUrl}/get_Calendar`, init)
		return call;
	}

	static async getCalandarAnon (body) {
		let init = {
			method : "GET",
			headers : {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		}
		let call = await fetch(`${apiUrl}/get_Calendar_anon`, init)
		return call;
	}
	
}

export default OrganisatorService;