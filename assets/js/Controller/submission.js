import User from "../Models/UserModel.js";
import { UserServer
 } from "./server.js";
export default class Submission{
    constructor(){
        this._form = document.querySelector('form')
        this._server = new UserServer()
        this._message 
    }

    async submitLogin(){
        this._form.addEventListener('submit', async event => {
            event.preventDefault();
            const username = document.querySelector("[data-type='usernameLogin']").value
            const password = document.querySelector("[data-type='passwordLogin']").value

            //login
            await this._server.loginRequest(username,password)

            //redirect setTimeout("location.href = 'http://www.home.com';",5000);
        })
    }

    async submitRegister(){
        this._form.addEventListener('submit', async event => {
            event.preventDefault();
            const email = document.querySelector("[data-type='emailRegister']").value 
            const username = document.querySelector("[data-type='usernameRegister']").value 
            const password = document.querySelector("[data-type='passwordRegister']").value       
            // create new user
            const user = new User(username,email,password)
            // send new user to server
            //await this._server.registerRequest(user)
            await this._server.registerRequest(username,email,password)
    
        })
    }

    submitReset(){
        const password = document.querySelector("data-type='passwordReset'")
        // get user by token
        // send request to update user
    }
    submitToEmail(){
        const email = document.querySelector("[data-type='emailReset']").value 
        //send reset password email
    }
}

let form = document.querySelector('[data-form]')
if(form.dataset.form == 'login') new Submission().submitLogin()
else if(form.dataset.form == 'register') new Submission().submitRegister()
else if(form.dataset.form == 'sendEmail') new Submission().submitToEmail()
else new Submission().submitRegister()