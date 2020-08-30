const apiUrl = "http://127.0.0.1:8000/post/";

class PostService {


    static async createPost (body) {
        let init = {
            method : "POST",
            headers : {
                'Authorization': 'Bearer ' + localStorage.getItem("TokenUser"),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        }
        let call = await fetch(`${apiUrl}/create_post`, init)
        return call;
    }

    static async modifyPost (body) {
        let init = {
            method : "POST",
            headers : {
                'Authorization': 'Bearer ' + localStorage.getItem("TokenUser"),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        }
        let call = await fetch(`${apiUrl}/modify_post`, init)
        return call;
    }

    static async modifyPostImg (body) {
        let init = {
            method : "POST",
            headers : {
                'Authorization': 'Bearer ' + localStorage.getItem("TokenUser"),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        }
        let call = await fetch(`${apiUrl}/modify_post_img`, init)
        return call;
    }

    static async getSlider (body) {
        let init = {
            method : "GET",
            headers : {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        }
        let call = await fetch(`${apiUrl}/get_slider`, init)
        return call;
    }

    static async getHistorique (body) {
        let init = {
            method : "GET",
            headers : {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        }
        let call = await fetch(`${apiUrl}/get_historique`, init)
        return call;
    }

    static async getSponso (body) {
        let init = {
            method : "GET",
            headers : {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        }
        let call = await fetch(`${apiUrl}/get_sponso`, init)
        return call;
    }

    static async getPost (body) {
        let init = {
            method : "POST",
            headers : {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        }
        let call = await fetch(`${apiUrl}/get_post`, init)
        return call;
    }

}

export default PostService;