import Providers from "../providers/provider";
import { decorate, observable } from 'mobx';


class userLoginStore {

    rest = new Providers()

    constructor(){
        this.email= "";
        this.password="";
        this.userToken= null;
    }

    async loginPost () {

       return this.rest.postLogin(this.email, this.password);
       
    }
}

decorate(userLoginStore, {
    email:observable,
    password:observable,
    userToken:observable
})

const UserLoginStore = new userLoginStore();
export default UserLoginStore;