//import {scryptSync, randomBytes, timingSafeEqual} from 'crypto'
//import bcrypt
export default class User{
    constructor(username,email,password){
        this._username = username
        this._email = email
        //this._hash = this.cryptoPassword(password).split(':')
        this._hash = password
    }
    
    get username() {
        return this._username;
    }
    get email() {
        return this._email;
    }
    get password() {
        return this._hash;
    }

    cryptoPassword(password){
        const cost = 12
        return bcrypt.hash(password, cost)
    }
    
}