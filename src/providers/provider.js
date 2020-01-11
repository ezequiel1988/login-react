import axios from 'axios';

export default class Providers {

    postLogin (email, password) {
       return axios.post('http://localhost:4000/login', {email:email, password:password})
    }

    deleteLogin (token, email, password) {
        return axios.delete('http://localhost:4000/login', {headers: {'Authorization': "Bearer " + token}, data:{email:email, password:password}})
    }

    postUser (nombre, apellido,email, password) {
        return axios.post('http://localhost:4000/registrarse', {nombre:nombre, apellido:apellido, email:email, password:password})
     }
    
}