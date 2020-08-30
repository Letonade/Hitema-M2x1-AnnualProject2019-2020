const apiUrl = "http://127.0.0.1:8000/game";

class OrganisatorService {
// pour creation
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

	static async modifyGame (body) {
		let init = {
			method : "POST",
			headers : {
				'Authorization': 'Bearer ' + localStorage.getItem("TokenUser"),
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		}
		let call = await fetch(`${apiUrl}/modify_game`, init)
		return call;
	}

	static async addImg (body) {
		let init = {
			method : "POST",
			headers : {
				'Authorization': 'Bearer ' + localStorage.getItem("TokenUser"),
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		}
		let call = await fetch(`${apiUrl}/add_img`, init)
		return call;
	}

	static async removeImg (body) {
		let init = {
			method : "POST",
			headers : {
				'Authorization': 'Bearer ' + localStorage.getItem("TokenUser"),
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		}
		let call = await fetch(`${apiUrl}/remove_img`, init)
		return call;
	}

	static async getGame (body) {
		let init = {
			method : "POST",
			headers : {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		}
		let call = await fetch(`${apiUrl}/get_game`, init)
		return call;
	}

	static async getTypes (body) {
		let init = {
			method : "GET",
			headers : {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		}
		let call = await fetch(`${apiUrl}/get_Types`, init)
		return call;
	}

	static async getParticipants (body) {
		let init = {
			method : "POST",
			headers : {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		}
		let call = await fetch(`${apiUrl}/get_Participants`, init)
		return call;
	}

//Pour Organiser
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

//Hybrid Uses
	static async participe (body) {
		let init = {
			method : "POST",
			headers : {
				'Authorization': 'Bearer ' + localStorage.getItem("TokenUser"),
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		}
		let call = await fetch(`${apiUrl}/participe`, init)
		return call;
	}

	static async noParticipe (body) {
		let init = {
			method : "POST",
			headers : {
				'Authorization': 'Bearer ' + localStorage.getItem("TokenUser"),
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		}
		let call = await fetch(`${apiUrl}/no_participe`, init)
		return call;
	}
	
}

export default OrganisatorService;