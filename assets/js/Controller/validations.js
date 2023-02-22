import { ErrorModel } from "../Models/errorModel.js";

export class Validacao{
    constructor(){
        this._inputs = document.querySelectorAll('.input__padrao')
        this._regex = {
            email: /@/,
            senha: /@/,
        }
        this._validadores = {
           email: campo => validaEmail(campo),
           senha: campo => validaSenha(campo)
        }
    }

    aplicaValidacao(){
        this._inputs.forEach(input => {
            input.addEventListener('blur', (evento) =>{
                this.validaCampo(evento.target)
            })
        });
    }

    validaCampo(campo){
        const tipoCampo = campo.dataset.tipo;
        //validação de Pattern
        if(this._regex[tipoCampo]){
            campo.pattern = this._regex[tipoCampo]
        }

        //mensagem de erro
         if(campo.validity.valid){
            campo.classList.remove('input__invalido')
            campo.nextElementSibling.classList.remove("texto__erro")
            campo.nextElementSibling.innerHTML = ""
        }else{
            campo.classList.add('input__invalido')
            campo.nextElementSibling.classList.add("texto__erro")
            campo.nextElementSibling.innerHTML = new ErrorModel().mostraErro(campo, tipoCampo)
        }
    } 
}