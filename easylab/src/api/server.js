export class Server{
    constructor(){
        this.url = ''
    }
    async geRequest(){
        const connection = await fetch(this.url)
        const convertedConnection = await connection.json()
        return convertedConnection
    }
    async detailsRequest(id){
        const connection = await fetch(`${this.url}/${id}`) 
        const convertedConnection = await connection.json()
        return convertedConnection
    }
    async deleteRequest(id){
        const connection = await fetch(`${this.url}/${id}`, {
            method: 'DELETE'
        })
        return connection
    }
    async findRequest(query){
        const connection = await fetch(`${this.url}?q=${query}`) 
        const convertedConnection = await connection.json()
        return convertedConnection
    }
}

export class UserServer extends Server{
    constructor(){
        super()
        this.url = 'http://localhost:8000/api/users/login'
        this.urlRegister = 'http://localhost:8000/api/users/register'
    }   
    async loginRequest(username,password){
        try{
            const connection = await fetch(this.url,{
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    email: username,
                    password: password
                })
            })
            const convertedConnection = await connection.json()
            return convertedConnection
        }catch(err){
            console.log(err)
        }
    }
    async registerRequest(username,email,password,confirm){
        console.log(username,email,password,confirm)
        try{
            const connection = await fetch(this.urlRegister,{
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    name: username,
                    email: email,
                    password: password,
                    passwordConfirm: confirm
                })
            })
            const convertedConnection = await connection.json()
            return convertedConnection
        }catch(err){
            return err
        }
    }

    async updateRequest(id,user){
        const connection = await fetch(`${this.url}/${id}`,{
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                username: user.username,
                email: user.email,
                password: user.password
            })
        })
        const convertedConnection = await connection.json()
        return convertedConnection
    }
}

export class ContentServer extends Server {
    constructor(){
        super()
        this.url = ''
    }   
    async postRequest(title,date,content,tags){
        const connection = await fetch(this.url,{
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                date: date,
                content: content,
                tags: tags
            })
        })
        const convertedConnection = await connection.json()
        return convertedConnection
    }
}