import React, { Component } from "react";
import Axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { API_URL } from "../../constants/API";
import swal from "sweetalert";
import { loginHandler } from "../../redux/actions";
import { connect } from "react-redux";
import Cookie from "universal-cookie";
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

const cookieObject = new Cookie();
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
  // 1. login dan ubah global state user menjadi data user (id,username,fullname,role)
  // 2. check di app.jsx, jika global state user sudah terisi dengan data user, set cookie dengan data user

  // 1. componentDidUpdate ajab trigger ketika sebuah update
  // update => perubahan state atau perubahan props
  // 2. Global state telah di map ke props melalui dunction mapStateToProps dan disconnect
  // 3. berarti global state = props
  // 4. Jika global state berubah, maka props akan berubah juga
  // 5. jika props berubah, maka componentDidUpdate akan ke-trigger
  componentDidUpdate() {
    // jika this.props.user.ud sudah ada isi, berarti data seseorang sudah dalam global state
    if (this.props.user.id) {
      cookieObject.set("authData", JSON.stringify(this.props.user));
      // Didalam cookie tidak bisa mengambil object,
      // jadi manggilnya harus JSON.stringify(this.props.user) --> ini buat ngubah jd string
      // soalnya gabis langsung "....."
    }
  }

  render() {
    // if (!this.props.user.id) {
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
    // } else {
    //   return <div>...</div>;
    // }
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
