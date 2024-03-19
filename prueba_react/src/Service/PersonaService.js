import axios from 'axios';

export class PersonaService {
    baseUrl = "http://localhost:8086/api/usuario/"
    getAll() {
        return axios.get(this.baseUrl + "all").then(res => res.data);
    }
}