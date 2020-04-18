import React from 'react'
import Axios from 'axios';
import { Link, Redirect } from 'react-router-dom'
import { API_URL } from "../../constants/API"



class LoginScreen extends React.Component {


    state = {
        arrUsers:[],
         loginUsername: "",
         loginPassword: "",
         currentUsername:"",
         isLoggedin: false

    };

    inputHandler = (e, field) => {
        this.setState({ [field]: e.target.value });
    };

    loginHandler = () => {
        const { loginUsername, loginPassword } = this.state;

        Axios.get(`${API_URL}/users`, {
            params: {
                username: loginUsername,
                password: loginPassword,
            }
        }) 
        .then((res) =>{
          
            for (let i = 0; i < res.data.length; i++) {

                if (
                    res.data[i].username == loginUsername &&
                    res.data[i].password == loginPassword
                ) {
                    this.setState({
                        isLoggedIn: true,
                        currentUsername: res.data[i].username,  
                        loginUsername: "",
                        loginPassword: "",
                    })

                } else if (i == res.data.length - 1) {
                    alert("Username / Password Salah");
                }
            }
        })

        .catch((err) =>{
            alert("Username / Password Salah");
        })
    
    };

    render(){

        const {
            isLoggedIn,
            currentUsername,
            loginPassword,
            loginUsername,
        } = this.state;

        if (!isLoggedIn) {
            return(
                    <div>
                        <center>
                            <div className="card p-5" style={{ width: "400px" }}>
                                <h4>Login</h4>
                                <input
                                    value={loginUsername}
                                    className="form-control mt-2"
                                    type="text"
                                    placeholder="Username"
                                    onChange={(e) => this.inputHandler(e, "loginUsername")}
                                />
                                <input
                                    value={loginPassword}
                                    className="form-control mt-2"
                                    type="text"
                                    placeholder="Password"
                                    onChange={(e) => this.inputHandler(e, "loginPassword")}
                                />
                                <input
                                    type="button"
                                    value="Login"
                                    className="btn btn-primary mt-3"
                                    onClick={this.loginHandler}
                                />
                            </div>
                        </center>
                    </div >
                    )

        } else {
            return <Redirect to={`/Profile/${currentUsername}`} />
        }

    }
}

export default LoginScreen