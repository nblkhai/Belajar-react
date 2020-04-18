import React from "react";
import Axios from "axios";
import { API_URL } from "../../constants/API";
import { Link, Redirect } from "react-router-dom";

class RegisterScreen extends React.Component {
  state = {
    arrUsers: [],
    username: "",
    password: "",
    repeatPassword: "",
    role: "",
    firstName: "",
    lastName: "",
    fullName: "",
    isRegister: false,
    activeEditIdx: null,
  };
  inputHandler = (e, field) => {
    this.setState({ [field]: e.target.value });
  };
  registHandler = () => {
    const {
      arrUsers,
      username,
      password,
      repeatPassword,
      role,
      firstName,
      lastName,
      fullName,
    } = this.state;
    Axios.get(`${API_URL}/users`, {
      params: {
        username: username,
      },
    })
      .then((res) => {
        if (res.data.length == 0) {
          if (password == repeatPassword) {
            alert("Regist Bergasil!");
            Axios.post(`${API_URL}/users`, {
              username: username,
              password: password,
              repeatPassword: repeatPassword,
              role: role,
              firstname: firstName,
              lastname: lastName,
              fullname: firstName + lastName,
            })
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });
            this.setState({
              username: "",
              password: "",
              repeatPassword: "",
              role: "",
              firstName: "",
              lastName: "",
            });
          } else {
            alert("Password Salah!");
          }
        } else {
          alert("Username Sudah Ada! ");
        }
      })
      .catch(() => {
        alert("Username Sudah Ada!");
      });
  };
  render() {
    const {
      username,
      password,
      repeatPassword,
      firstName,
      lastName,
      role,
      isRegister,
    } = this.state;

    if (!isRegister) {
      return (
        <div>
          <center>
            <div className="card p-5" style={{ width: "400px" }}>
              <h4>Register</h4>
              <input
                value={firstName}
                className="form-control mt-2"
                type="text"
                placeholder="First Name"
                onChange={(e) => this.inputHandler(e, "firstName")}
              />
              <input
                value={lastName}
                className="form-control mt-2"
                type="text"
                placeholder="Last Name"
                onChange={(e) => this.inputHandler(e, "lastName")}
              />
              <input
                value={username}
                className="form-control mt-2"
                type="text"
                placeholder="Username"
                onChange={(e) => this.inputHandler(e, "username")}
              />
              <input
                value={password}
                className="form-control mt-2"
                type="text"
                placeholder="Password"
                onChange={(e) => this.inputHandler(e, "password")}
              />
              <input
                value={repeatPassword}
                className="form-control mt-2"
                type="text"
                placeholder="Repeat Password"
                onChange={(e) => this.inputHandler(e, "repeatPassword")}
              />
              <input
                value={role}
                className="form-control mt-2"
                type="text"
                placeholder="Role"
                onChange={(e) => this.inputHandler(e, "role")}
              />
              <input
                type="button"
                value="Register"
                className="btn btn-primary mt-3"
                onClick={this.registHandler}
              />
            </div>
          </center>
        </div>
      );
    } else if (isRegister) {
      return (
        <Link to="/Login">
          <input
            type="button"
            value="Click for Login"
            className="btn btn-primary"
          />
        </Link>
      );
    }
  }
}
export default RegisterScreen;
