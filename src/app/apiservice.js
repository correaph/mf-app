import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'http://localhost:8081'
});

class ApiService {

    constructor(apiurl) {
        this.apiurl = apiurl;
    }

    post(url, obj) {
        return httpClient.post(`${this.apiurl}${url}`, obj);
    }

    put(url, obj) {
        return httpClient.put(`${this.apiurl}${url}`, obj);
    }

    delete(url) {
        return httpClient.delete(`${this.apiurl}${url}`);
    }

    get(url) {
        return httpClient.get(`${this.apiurl}${url}`);
    }

}

export default ApiService;