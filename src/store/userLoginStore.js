import UsersProviders from "../providers/providerUsers";
import { decorate, observable } from 'mobx';


class userLoginStore {

    rest = new UsersProviders()

    constructor(){
        this.nombre="";
        this.apellido="";
        this.email= "eze@email.com";
        this.password="secreto";
        this.userToken= null;
        this.showHome = false;
    }

   async loginPost () {
       console.log(this.email, this.password)
        try {
            const { data } = await this.rest.postLogin(this.email, this.password);
            console.log(data)
            this.userToken = data.token;
            console.log(this.userToken);
          } catch (error) {
            console.log(error)
          }    
    }

   async userPost () {
       try {

        const { data } = await this.rest.postUser(this.nombre, this.apellido, this.email, this.password);
        console.log(data)
           
       } catch (error) {
           console.log(error)
       }
   }

   async loginDelete () {
       try {

        const { data } = await this.rest.deleteLogin(this.userToken, this.email, this.password);
        this.userToken = null;
        console.log(data)
           
       } catch (e) {
           console.log(e)
       }
   }
}

decorate(userLoginStore, {
    nombre:observable,
    apellido:observable,
    email:observable,
    password:observable,
    userToken:observable,
    showHome:observable,
})

const UserLoginStore = new userLoginStore();
export default UserLoginStore;