import { ErrorModel } from "../Models/errorModel.js";
import { UserServer } from "./server.js";
export default class Validation{
    constructor(input){
        this._inputs = document.querySelectorAll(input)
        this.userBD = new UserServer()
        this._message =''
        this._regex = {
            email: '', // basic email pattern
            usernameRegister: /[^\d\."'!@#$%¨&*\(\\)][.]/, // do not start with number or specila chars
            passwordRegister: /([a-b].[A-Z].[@#$%&*].){8,50}/, //min 8chars, one upcase, one special char one 
        }
        this._validators = {
            confirm: field => this.validConfirm(field),
            emailRegister: field => this.checkDB(field),
            passwordLogin: field => this.checkDB(field),
            usernameRegister: field => this.checkDB(field),
            usernameLogin: field => this.checkDB(field),
        }
    }

    applyValidation(){
        this._inputs.forEach(input => {
            input.addEventListener('blur', (event) =>{
                this.validateField(event.target)
            })
        });
    }

    validateField(field){
        const type = field.dataset.type;
        //pattern validation
        if(this._regex[type]){
            field.pattern = this._regex[type]
        }
        //Custom Validity
        if(this._validators[type]){
            this._validators[type](field)
        }
        //error message
        if(field.validity.valid){
            field.classList.remove('field--invalid')
            field.classList.add('field--valid')
            // field.nextElementSibling.classList.remove("message__error")
            field.nextElementSibling.innerHTML = ""
        }else{
            field.classList.remove('field--valid')
            field.classList.add('field--invalid')
            // field.nextElementSibling.classList.add("message__error")
            field.nextElementSibling.innerHTML = new ErrorModel().showError(field, type)
        }

    } 
    checkDB(field){

        const db = this.userBD.findRequest(field.value)
        if(db) {
            this._mensagem = 'Email not registered'
        }  
        field.setCustomValidity(this._mensagem)
    }

    validConfirm(field){
        //get selector
        let password = document.querySelector('').value
        if (field.value != password){
            this._message = 'Passwords do no match'
        }  
        field.setCustomValidity(this._message)
    }
}