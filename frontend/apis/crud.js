import axios from "axios";

function Crud(){
    this.baseUrl = "api/";
    this.get = async (url) => {
        return axios.get(`${this.baseUrl}${url}`)
        .then(res => res.data)
        .catch(err => console.log(err))
    }
    this.post = async (url, data = null) => {
        return axios.post(`${this.baseUrl}${url}`, data)
        .then(res => res.data)
        .catch(err => console.log(err))
    }
    this.update = async (url, data = null) => {
        return axios.post(`${this.baseUrl}${url}`, data)
        .then(res => res.data)
        .catch(err => console.log(err))
    }
    this.delete = async (url, data = null) => {
        return axios.post(`${this.baseUrl}${url}`, data)
        .then(res => res.data)
        .catch(err => console.log(err))
    }
}

export default Crud;