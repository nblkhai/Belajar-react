import React, { Component } from "react";
import Axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { API_URL } from "../../constants/API";
import swal from "sweetalert";
import { loginHandler } from "../../redux/actions";
import { connect } from "react-redux";

// class LoginScreen extends React.Component {
//   state = {
//     arrUsers: [],
//     loginUsername: "",
//     loginPassword: "",
//     currentUsername: "",
//     isLoggedin: false,
//   };

//   inputHandler = (e, field) => {
//     this.setState({ [field]: e.target.value });
//   };

//   loginHandler = () => {
//     const { loginUsername, loginPassword } = this.state;
//   }
//   render() {
//     const {
//       isLoggedIn,
//       currentUsername,
//       loginPassword,
//       loginUsername,
//     } = this.state;

//     if (!isLoggedIn) {
//       return (
//         <div>
//           <center>
//             <div className="card p-5" style={{ width: "400px" }}>
//               <h4>Login</h4>
//               <input
//                 value={loginUsername}
//                 className="form-control mt-2"
//                 type="text"
//                 placeholder="Username"
//                 onChange={(e) => this.inputHandler(e, "loginUsername")}
//               />
//               <input
//                 value={loginPassword}
//                 className="form-control mt-2"
//                 type="text"
//                 placeholder="Password"
//                 onChange={(e) => this.inputHandler(e, "loginPassword")}
//               />
//               <input
//                 type="button"
//                 value="Login"
//                 className="btn btn-primary mt-3"
//                 onClick={this.loginHandler}
//               />
//             </div>
//           </center>
//         </div>
//       );
//     } else {
//       return <Redirect to={`/Profile/${currentUsername}`} />;
//     }
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     user: state.user,
//   };
// };

// const mapDispatchToProps = {
//   onLogin: loginHandler,
// };
// export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

// export default LoginScreen

// Punya Abangnya

class LoginScreen extends Component {
  state = {
    username: "",
    password: "",
    isLoggedIn: false,
    loginProfile: {},
  };

  inputHandler = (event, field) => {
    const { value } = event.target;
    this.setState({ [field]: value });
  };

  loginHandler = () => {
    const { username, password } = this.state;

    const userData = {
      username,
      password,
    };
    this.props.onLogin(userData);
  };

  render() {
    if (!this.state.isLoggedIn) {
      return (
        <div className="container d-flex justify-content-center">
          <div className="card p-5" style={{ width: "400px" }}>
            <h4>Login</h4>
            <p>Username: {this.props.user.username}</p>
            <input
              className="form-control mt-2"
              type="text"
              placeholder="Username"
              onChange={(e) => this.inputHandler(e, "username")}
            />
            <input
              className="form-control mt-2"
              type="text"
              placeholder="Password"
              onChange={(e) => this.inputHandler(e, "password")}
            />
            <input
              type="button"
              value="Login"
              className="btn btn-primary mt-3"
              onClick={this.loginHandler}
            />
          </div>
        </div>
      );
    } else {
      return <Redirect to={`/profile/${this.state.loginProfile.id}`} />;
    }
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  onLogin: loginHandler,
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
