import axios from "axios";

class ApiKMC {
  constructor(){
    this.url_api = 'http://localhost:3001/';
  }

  post = (url, params, headers) => {
    return axios.post(url, params, headers);
  }

  get = (url, params, headers) => {
    return axios.get(url, params, headers);
  }


  obtainAllUsuarios = (params) => {
    return axios.get(this.url_api + 'users/getAll', params, {
        'Cookie': document.cookie,
        'Content-Type': 'application/json'
    });
}

}

export default ApiKMC;
