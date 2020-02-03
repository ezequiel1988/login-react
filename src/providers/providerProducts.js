import axios from 'axios';

export default class ProductsProvider {

    // getAllProducts (token) {
    //    return axios.post('http://localhost:4000/login', {headers: {'Authorization': "Bearer " + token}})
    // }

    // productsPerPage (token) {
    //     return axios.delete('http://localhost:4000/login', {headers: {'Authorization': "Bearer " + token}})
    // }
    
    getAllProducts () {
        return axios.get('http://localhost:4000/home/productos')
     }
 
     productsPerPage (page) {
         return axios.get(`http://localhost:4000/home/productos/${page}`)
     }
}