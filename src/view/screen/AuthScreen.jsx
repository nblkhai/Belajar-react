import React from 'react'


class AuthScreen extends React.Component{
    
    state = {
        arrUsername:[],
        username: "",
        arrPassword:[],
        password: "",
        repeatPassword : "",
        loginUsername :"",
        loginPassword :"",
        cond: 0,
        tes:''
    }
    
    render(){
        const {arrUsername, username,arrPassword, password, repeatPassword, loginUsername,loginPassword,cond} = this.state
        const inputHandler = (e, field) => {
            this.setState({[field]: e.target.value})
          
        }
        const registHandler = () => {
            
            if(!(username && password && repeatPassword)){
                alert("Isi Field yang Kosong!")
            }else if (password !== repeatPassword){
                alert("Password Tidak Sesuai")
            } else{
                this.setState({arrUsername:this.state.arrUsername.concat(username), arrPassword:this.state.arrPassword.concat(password)})
                alert("Terima kasih sudah Register")
                // Clear input after Register
                document.getElementById('username').value=""
                document.getElementById('password').value=""
                document.getElementById('repeatPassword').value=""
            }       
            }
           
            const loginHandler = () => {
                let a = 0
                for (let i = 0; i < arrUsername.length; i++) {
                    if (arrUsername[i] == loginUsername && arrPassword[i] == loginPassword) {
                        alert ("Login Berhasil")
                        a = 1
                        this.setState({ cond: 1 })
                        // Clear input after Login
                        document.getElementById('loginUsername').value=""
                        document.getElementById('loginPassword').value=""
                    }
                }
                if (a < 1) {
                    alert("Username atau Pasword Salah")
                    this.setState({ cond: 0 })
    
                }
    
            }
        

        return(
            <div className="container">
                <h1>Hello World!</h1>
                <h1>AUTH SCREEN</h1>
            <div className="container m-2"> 
                <h3>Register</h3>
                <div className="form-group">
                <input className="m-2" onChange ={(e)=> inputHandler(e, "username")} type="text" placeholder="Username" id="username"/>
                <br/>
                <input className="m-2" onChange ={(e)=> inputHandler(e, "password")} type="text" placeholder="Password"id="password"/>
                <br/>
                <input className="m-2" onChange ={(e)=> inputHandler(e, "repeatPassword")}type="text" placeholder="Repeat Password"id="repeatPassword"/>
                <br/>
                <input className="btn btn-primary mt-2" onClick={registHandler} type="button" value="Register"/>

                </div>
            </div>

            <div className="container m-2">
                <h3>Login</h3>
                <div className="form-group">
                <input className="m-2" onChange ={(e)=> inputHandler(e, "loginUsername")} type="text" placeholder="Username" id="loginUsername"/>
                <br/>
                <input className="m-2" onChange ={(e)=> inputHandler(e, "loginPassword")} type="text" placeholder="Password" id="loginPassword"/>
                <br/>
                <input className="btn btn-primary mt-2" onClick={loginHandler} type="button" value="Login"/>

                </div>
            </div>
            </div>
        )
    }
}


export default AuthScreen;