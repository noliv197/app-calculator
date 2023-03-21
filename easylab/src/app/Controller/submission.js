import User from "../Models/UserModel.js";
import { UserServer } from "./server.js";

export default class Submission{
    constructor(){
        this._server = new UserServer()
        this._message = ''
    }

    async login(username,password){
        await this._server.loginRequest(username,password)
        // await this._server.loginUsers()
        //redirect setTimeout("location.href = 'http://www.home.com';",5000);
    }
    async register(email,username,password,confirm){
        // create new user
        // const user = new User(username,email,password)
        await this._server.registerUsers()
        // send new user to server
        //await this._server.registerRequest(user)
        await this._server.registerRequest(username,email,password,confirm)

    }
    async reset(password){
        console.log(password)
        // get user by token
        // send request to update user
    }
    async toEmail(email){
        console.log(email)
        //send reset password email
    }
}