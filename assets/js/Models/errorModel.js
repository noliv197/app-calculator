export class ErrorModel{
    constructor(){
        
        this._errorTypes = [
            'valueMissing',
            'typeMismatch',
            'patternMismatch',
            'customError'
        ];
        
        this._errorMessage = {
            email: {
                valueMissing: 'This field cannot be empty',
                patternMismatch: 'Invalid Email',
                customError: 'Email already register'
            },
            password: {
                valueMissing: 'This field cannot be empty',
                patternMismatch: 'Invalid Password'
            },
            username:{
                valueMissing: 'This field cannot be empty',
                patternMismatch: 'Invalid Email',
                customError: 'Username is already taken'
            },
            field:{
                valueMissing: 'This field cannot be empty '
            }
        };

    }

    showError(field,type){
        let message = '';
        this._errorTypes.forEach(err => {
            if(field.validity[err]){
                message = this._errorMessage[type][err];
            }
        });

        return message;
    }   
}