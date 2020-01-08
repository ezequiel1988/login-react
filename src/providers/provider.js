import axios from 'axios';

export default class Providers {

    postLogin (email, password) {
       return axios.post('http://localhost:4000/sessions/sign_in', {email:email, password:password})
    }
}