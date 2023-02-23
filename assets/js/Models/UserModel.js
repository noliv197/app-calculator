//import {scryptSync, randomBytes, timingSafeEqual} from 'crypto'

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

    cryptoPassword(password){
        const random = randomBytes(16).toString('hex')
        const hash = scryptSync(password,random,64).toString('hex')
        return `${random}:${hash}`
    }
    
}