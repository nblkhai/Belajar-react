import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutHandler } from "../../redux/actions";
import Cookie from "universal-cookie";

const cookiesObject = new Cookie();
class Navbar extends React.Component {
  logoutDataHandler = (userData) => {
    // untuk hapus global state
    this.props.logoutHandler(userData);
    // untuk hapus cookie
    cookiesObject.remove("authData");
  };
  render() {
    return (
      <div
        className="d-flex justify-content-around align-items-center"
        style={{ height: "80px" }}
      >
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link onClick={this.logoutDataHandler} to="/home">
          Logout
        </Link>
        {/* {this.props.user.id ? (
          <input
            type="button"
            value="Logout"
            className="btn btn-primary mt-3"
            onClick={this.logoutHandler}
          />
        ) : null} */}

        {/* <Link to="/input">Input Screen </Link> */}
        {/* <Link to="/todo"> Todo Input </Link> */}
        <p>Hello {this.props.user.username}</p>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = {
  logoutHandler,
};

export default connect(mapStatetoProps, mapDispatchToProps)(Navbar);

// import React from "react";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";

// class Navbar extends React.Component {
//   render() {
//     return (
//       <div
//         className="d-flex justify-content-around align-items-center"
//         style={{ height: "80px" }}
//       >
//         <Link to="/auth">Register | Login</Link>
//         <Link to="/input">Input Screen</Link>
//         <Link to="/counter">Counter Screen</Link>
//         {this.props.user.username}
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     // Field dlm object ini bisa diakses lewat this.props.namaField
//     todo: state.haha,
//     user: state.user,
//   };
// };

// export default connect(mapStateToProps)(Navbar);
