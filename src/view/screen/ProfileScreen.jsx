import React from "react";
import Axios from "axios";
import {API_URL} from '../../constants/API'

class ProfileScreen extends React.Component {

    state ={
        userList:[]
    }
  getDataHandler = () => {
    // Axios.get("http://localhost:3001/users/1")
    //   .then((res) => {
    //     console.log(res.data);
    //     this.setState({userList: res.data})
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    Axios.get("http://localhost:3001/users", {
        params:{
            username:'admin'
        }
    })
    .then((res) => {
      console.log(res.data);
      this.setState({userList: res.data})
    })
    .catch((err) => {
      console.log('Bukan Axios');
    })
  };
  deleteDataHandler = () => {
    Axios.delete(`${API_URL}/users/1`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  postDataHandler = () => {
    Axios.post(`${API_URL}/users`, {
      username: "steve",
      password: "123",
      role: "admin",
      fullName: "steve jobs",
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="container text-center">
        <h1>Profile</h1>
        <h2>Welcome : {this.props.match.params.username}</h2>
        {/* <input
          onClick={this.getDataHandler}
          type="button"
          value="Get Data"
          className="btn btn-success"
        />
         <input
          onClick={this.getDataHandler}
          type="button"
          value="Delete data "
          className="btn btn-danger"
        /> */}
      </div>
    );
  }
}

export default ProfileScreen;

// AJAX Request (Asynchronus JavaScipt and XML)
