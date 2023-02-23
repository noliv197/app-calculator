import User from "../Models/UserModel.js";

export default class Submission{
    constructor(){
        this._form = document.querySelector('form')
        this._message 
    }

    submitLogin(){
        this._form.addEventListener('submit', event => {
            event.preventDefault();
            const username = document.querySelector("[data-type='usernameLogin']").value
            const password = document.querySelector("[data-type='passwordLogin']").value
            console.log(username,password)
            //login
            //redirect setTimeout("location.href = 'http://www.home.com';",5000);
        })
    }

    submitRegister(){
        this._form.addEventListener('submit', event => {
            event.preventDefault();
            const email = document.querySelector("[data-type='emailRegister']").value 
            const username = document.querySelector("[data-type='usernameRegister']").value 
            const password = document.querySelector("[data-type='passwordRegister']").value       
            
            console.log(email,username,password)
            // create new user
            new User(username,email,password)
            // send new user to server
    
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