import React from 'react'
import {Link,Redirect} from 'react-router-dom'

// Punya Bella 
// class AuthScreen extends React.Component{
//     state = {
//         arrUsername:[],
//         username: "",
//         arrPassword:[],
//         password: "",
//         repeatPassword : "",
//         loginUsername :"",
//         loginPassword :"",
//         cond: 0,
//         tes:''
//     }
//     render(){
//         const {arrUsername, username,arrPassword, password, repeatPassword, loginUsername,loginPassword,cond} = this.state
//         const inputHandler = (e, field) => {
//             this.setState({[field]: e.target.value})
//         }
//         const registHandler = () => {
//             if(!(username && password && repeatPassword)){
//                 alert("Isi Field yang Kosong!")
//             }else if (password !== repeatPassword){
//                 alert("Password Tidak Sesuai")
//             } else{
//                 this.setState({arrUsername:this.state.arrUsername.concat(username), arrPassword:this.state.arrPassword.concat(password)})
//                 alert("Terima kasih sudah Register")
//                 // Clear input after Register
//                 document.getElementById('username').value=""
//                 document.getElementById('password').value=""
//                 document.getElementById('repeatPassword').value=""
//             }       
//             }
//             const loginHandler = () => {
//                 let a = 0
//                 for (let i = 0; i < arrUsername.length; i++) {
//                     if (arrUsername[i] == loginUsername && arrPassword[i] == loginPassword) {
//                         alert ("Login Berhasil")
//                         a = 1
//                         this.setState({ cond: 1 })
//                         // Clear input after Login
//                         document.getElementById('loginUsername').value=""
//                         document.getElementById('loginPassword').value=""
//                     }
//                 }
//                 if (a < 1) {
//                     alert("Username atau Pasword Salah")
//                     this.setState({ cond: 0 })
//                 }
//             }
//         return(
//             <div className="container">
//                 <h1>Hello World!</h1>
//                 <h1>AUTH SCREEN</h1>
//             <div className="container m-2"> 
//                 <h3>Register</h3>
//                 <div className="form-group">
//                 <input className="m-2" onChange ={(e)=> inputHandler(e, "username")} type="text" placeholder="Username" id="username"/>
//                 <br/>
//                 <input className="m-2" onChange ={(e)=> inputHandler(e, "password")} type="text" placeholder="Password"id="password"/>
//                 <br/>
//                 <input className="m-2" onChange ={(e)=> inputHandler(e, "repeatPassword")}type="text" placeholder="Repeat Password"id="repeatPassword"/>
//                 <br/>
//                 <input className="btn btn-primary mt-2" onClick={registHandler} type="button" value="Register"/>

//                 </div>
//             </div>

//             <div className="container m-2">
//                 <h3>Login</h3>
//                 <div className="form-group">
//                 <input className="m-2" onChange ={(e)=> inputHandler(e, "loginUsername")} type="text" placeholder="Username" id="loginUsername"/>
//                 <br/>
//                 <input className="m-2" onChange ={(e)=> inputHandler(e, "loginPassword")} type="text" placeholder="Password" id="loginPassword"/>
//                 <br/>
//                 <input className="btn btn-primary mt-2" onClick={loginHandler} type="button" value="Login"/>

//                 </div>
//             </div>
//             </div>
//         )
//     }
// }


// export default AuthScreen;


// PUNYA ABANGNYA 

// class AuthScreen extends React.Component {
//     state = {
//       username: "",
//       password: "",
//       repPassword: "",
//       isLoggedIn: false,
//       users: [],
//       loginUsername: "",
//       loginPassword: "",
//       currentUsername: "",
//     };
  
//     render() {
//       const {
//         username,
//         password,
//         repPassword,
//         isLoggedIn,
//         users,
//         currentUsername,
//         loginPassword,
//         loginUsername,
//       } = this.state;
  
//       const inputHandler = (e, field) => {
//         this.setState({ [field]: e.target.value });
//       };
  
//       const registerHandler = () => {
//         if (repPassword == password) {
//           let newData = {
//             username,
//             password,
//           };
  
//           this.setState({
//             users: [...users, newData],
//             username: "",
//             password: "",
//             repPassword: "",
//           });
  
//           console.log(users);
//         } else {
//           alert("Password belum cocok");
//         }
//       };
  
//       const loginHandler = () => {
//         for (let i = 0; i < users.length; i++) {
//           if (
//             users[i].username == loginUsername &&
//             users[i].password == loginPassword
//           ) {
//             this.setState({
//               isLoggedIn: true,
//               currentUsername: users[i].username,
//               loginUsername: "",
//               loginPassword: "",
//             });
//             break;
//           }
  
//           if (i == users.length - 1) {
//             alert("User tidak ada atau password salah");
//           }
//         }
//       };
  
//       return (
//         <div>
//           <h1>Auth Screen</h1>
//           <center>
//             <div className="card p-5" style={{ width: "400px" }}>
//               <h4>Register</h4>
//               <input
//                 value={username}
//                 className="form-control mt-2"
//                 type="text"
//                 placeholder="Username"
//                 onChange={(e) => inputHandler(e, "username")}
//               />
//               <input
//                 value={password}
//                 className="form-control mt-2"
//                 type="text"
//                 placeholder="Password"
//                 onChange={(e) => inputHandler(e, "password")}
//               />
//               <input
//                 value={repPassword}
//                 className="form-control mt-2"
//                 type="text"
//                 placeholder="Repeat Password"
//                 onChange={(e) => inputHandler(e, "repPassword")}
//               />
//               <input
//                 type="button"
//                 value="Register"
//                 className="btn btn-primary mt-3"
//                 onClick={registerHandler}
//               />
//             </div>
//             <div className="card p-5" style={{ width: "400px" }}>
//               <h4>Login</h4>
//               <input
//                 value={loginUsername}
//                 className="form-control mt-2"
//                 type="text"
//                 placeholder="Username"
//                 onChange={(e) => inputHandler(e, "loginUsername")}
//               />
//               <input
//                 value={loginPassword}
//                 className="form-control mt-2"
//                 type="text"
//                 placeholder="Password"
//                 onChange={(e) => inputHandler(e, "loginPassword")}
//               />
//               <input
//                 type="button"
//                 value="Login"
//                 className="btn btn-primary mt-3"
//                 onClick={loginHandler}
//               />
//             </div>
//             {isLoggedIn ? <h2>Welcome {currentUsername}</h2> : null}
//           </center>
//         </div>
//       );
//     }
//   }
  
//   export default AuthScreen;

// EXERCISE 
// class AuthScreen extends React.Component {
//     state = {
//       username: "",
//       password: "",
//       repPassword: "",
//       isLoggedIn: false,
//       users: [],
//       loginUsername: "",
//       loginPassword: "",
//       currentUsername: "",
//     };
  
//     render() {
//       const {
//         username,
//         password,
//         repPassword,
//         isLoggedIn,
//         users,
//         currentUsername,
//         loginPassword,
//         loginUsername,
//       } = this.state;
  
//       const inputHandler = (e, field) => {
//         this.setState({ [field]: e.target.value });
//       };
  
//       const registerHandler = () => {
//         if (repPassword == password) {
//           let newData = {
//             username,
//             password,
//           };
  
//           this.setState({
//             users: [...users, newData],
//             username: "",
//             password: "",
//             repPassword: "",
//           });
  
//           console.log(users);
//         } else {
//           alert("Password belum cocok");
//         }
//       };
  
//       const loginHandler = () => {
//         for (let i = 0; i < users.length; i++) {
//           if (
//             users[i].username == loginUsername &&
//             users[i].password == loginPassword
//           ) {
//             this.setState({
//               isLoggedIn: true,
//               currentUsername: users[i].username,
//               loginUsername: "",
//               loginPassword: "",
//             });
//             break;
//           }
  
//           if (i == users.length - 1) {
//             alert("User tidak ada atau password salah");
//           }
//         }
//       };
  
//       const deleteHandler = (idx) => {
//         let temp = [...users];
  
//         temp.splice(idx, 1);
  
//         this.setState({ users: temp });
//       };
  
//       const renderUsers = () => {
//         return users.map((val, idx) => {
//           return (
//             <tr>
//               <td>{idx + 1}</td>
//               <td>{val.username}</td>
//               <td>
//                 <input
//                   type="button"
//                   value="Delete"
//                   className="btn btn-danger"
//                   onClick={() => deleteHandler(idx)}
//                 />
//               </td>
//             </tr>
//           );
//         });
//       };
  
//       return (
//         <div>
//           <h1>Auth Screen</h1>
//           <center className="container">
//             <div className="card p-5" style={{ width: "400px" }}>
//               <h4>Register</h4>
//               <input
//                 value={username}
//                 className="form-control mt-2"
//                 type="text"
//                 placeholder="Username"
//                 onChange={(e) => inputHandler(e, "username")}
//               />
//               <input
//                 value={password}
//                 className="form-control mt-2"
//                 type="text"
//                 placeholder="Password"
//                 onChange={(e) => inputHandler(e, "password")}
//               />
//               <input
//                 value={repPassword}
//                 className="form-control mt-2"
//                 type="text"
//                 placeholder="Repeat Password"
//                 onChange={(e) => inputHandler(e, "repPassword")}
//               />
//               <input
//                 type="button"
//                 value="Register"
//                 className="btn btn-primary mt-3"
//                 onClick={registerHandler}
//               />
//             </div>
//             <table className="table">
//               <thead>
//                 <tr>
//                   <th>No</th>
//                   <th>Username</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>{renderUsers()}</tbody>
//             </table>
//             {/* <div className="card p-5" style={{ width: "400px" }}>
//               <h4>Login</h4>
//               <input
//                 value={loginUsername}
//                 className="form-control mt-2"
//                 type="text"
//                 placeholder="Username"
//                 onChange={(e) => inputHandler(e, "loginUsername")}
//               />
//               <input
//                 value={loginPassword}
//                 className="form-control mt-2"
//                 type="text"
//                 placeholder="Password"
//                 onChange={(e) => inputHandler(e, "loginPassword")}
//               />
//               <input
//                 type="button"
//                 value="Login"
//                 className="btn btn-primary mt-3"
//                 onClick={loginHandler}
//               />
//             </div>
//             {isLoggedIn ? <h2>Welcome {currentUsername}</h2> : null} */}
//           </center>
//         </div>
//       );
//     }
//   }
  
//   export default AuthScreen;

  // Exercise Delet Button 
  // class AuthScreen extends React.Component {
  //   state = {
  //     username: "",
  //     password: "",
  //     repPassword: "",
  //     isLoggedIn: false,
  //     users: [],
  //     loginUsername: "",
  //     loginPassword: "",
  //     currentUsername: "",
  //   };
  
  //   render() {
  //     const {
  //       username,
  //       password,
  //       repPassword,
  //       isLoggedIn,
  //       users,
  //       currentUsername,
  //       loginPassword,
  //       loginUsername,
  //     } = this.state;
  
  //     const inputHandler = (e, field) => {
  //       this.setState({ [field]: e.target.value });
  //     };
  
  //     const registerHandler = () => {
  //       if (repPassword == password) {
  //         let newData = {
  //           username,
  //           password,
  //         };
  
  //         this.setState({
  //           users: [...users, newData],
  //           username: "",
  //           password: "",
  //           repPassword: "",
  //         });
  
  //         console.log(users);
  //       } else {
  //         alert("Password belum cocok");
  //       }
  //     };
  
  //     const loginHandler = () => {
  //       for (let i = 0; i < users.length; i++) {
  //         if (
  //           users[i].username == loginUsername &&
  //           users[i].password == loginPassword
  //         ) {
  //           this.setState({
  //             isLoggedIn: true,
  //             currentUsername: users[i].username,
  //             loginUsername: "",
  //             loginPassword: "",
  //           });
  //           break;
  //         }
  
  //         if (i == users.length - 1) {
  //           alert("User tidak ada atau password salah");
  //         }
  //       }
  //     };
  
  //     const deleteHandler = (idx) => {
  //       let temp = [...users];
  
  //       temp.splice(idx, 1);
  
  //       this.setState({ users: temp });
  //     };
  
  //     const renderUsers = () => {
  //       return users.map((val, idx) => {
  //         if (idx % 2 == 0){
  //           return (
  //             <tr>
  //               <td>{idx + 1}</td>
  //               <td>{val.username}</td>
  //               <td>
  //                 <input
  //                   type="button"
  //                   value="Delete"
  //                   className="btn btn-danger"
  //                   onClick={() => deleteHandler(idx)}
  //                 />
  //               </td>
  //             </tr>
  //           );
  //         } else {
  //           return (
  //             <tr>
  //               <td>{idx + 1}</td>
  //               <td>{val.username}</td>
  //               <td>
  //                 <input
  //                   type="button"
  //                   value="Delete"
  //                   className="btn btn-warning"
  //                   onClick={() => deleteHandler(idx)}
  //                 />
  //               </td>
  //             </tr>
  //           );
  //         }
          
  //       });
  //     };
  
  //     return (
  //       <div>
  //         <h1>Auth Screen</h1>
  //         <center className="container">
  //           <div className="card p-5" style={{ width: "400px" }}>
  //             <h4>Register</h4>
  //             <input
  //               value={username}
  //               className="form-control mt-2"
  //               type="text"
  //               placeholder="Username"
  //               onChange={(e) => inputHandler(e, "username")}
  //             />
  //             <input
  //               value={password}
  //               className="form-control mt-2"
  //               type="text"
  //               placeholder="Password"
  //               onChange={(e) => inputHandler(e, "password")}
  //             />
  //             <input
  //               value={repPassword}
  //               className="form-control mt-2"
  //               type="text"
  //               placeholder="Repeat Password"
  //               onChange={(e) => inputHandler(e, "repPassword")}
  //             />
  //             <input
  //               type="button"
  //               value="Register"
  //               className="btn btn-primary mt-3"
  //               onClick={registerHandler}
  //             />
  //           </div>
  //           <table className="table">
  //             <thead>
  //               <tr>
  //                 <th>No</th>
  //                 <th>Username</th>
  //                 <th>Action</th>
  //               </tr>
  //             </thead>
  //             <tbody>{renderUsers()}</tbody>
  //           </table>
  //           {/* <div className="card p-5" style={{ width: "400px" }}>
  //             <h4>Login</h4>
  //             <input
  //               value={loginUsername}
  //               className="form-control mt-2"
  //               type="text"
  //               placeholder="Username"
  //               onChange={(e) => inputHandler(e, "loginUsername")}
  //             />
  //             <input
  //               value={loginPassword}
  //               className="form-control mt-2"
  //               type="text"
  //               placeholder="Password"
  //               onChange={(e) => inputHandler(e, "loginPassword")}
  //             />
  //             <input
  //               type="button"
  //               value="Login"
  //               className="btn btn-primary mt-3"
  //               onClick={loginHandler}
  //             />
  //           </div>
  //           {isLoggedIn ? <h2>Welcome {currentUsername}</h2> : null} */}
  //         </center>
  //       </div>
  //     );
  //   }
  // }
  
  // export default AuthScreen;

  // Exercise edit and delete
  class AuthScreen extends React.Component {
    state = {
      username: "",
      password: "",
      repPassword: "",
      isLoggedIn: false,
      users: [],
      loginUsername: "",
      loginPassword: "",
      currentUsername: "",
      activeEditIdx: null,
    };
  
    asd = () => {};
  
    render() {
      const {
        username,
        password,
        repPassword,
        isLoggedIn,
        users,
        currentUsername,
        activeEditIdx,
        loginPassword,
        loginUsername,
      } = this.state;
  
      const inputHandler = (e, field) => {
        this.setState({ [field]: e.target.value });
      };
  
      const registerHandler = () => {
        if (repPassword == password) {
          let newData = {
            username,
            password,
          };
  
          this.setState({
            users: [...users, newData],
            username: "",
            password: "",
            repPassword: "",
          });
  
          console.log(users);
        } else {
          alert("Password belum cocok");
        }
      };
  
      const loginHandler = () => {
        for (let i = 0; i < users.length; i++) {
          if (
            users[i].username == loginUsername &&
            users[i].password == loginPassword
          ) {
            this.setState({
              isLoggedIn: true,
              currentUsername: users[i].username,
              loginUsername: "",
              loginPassword: "",
            });
            break;
          }
  
          if (i == users.length - 1) {
            alert("User tidak ada atau password salah");
          }
        }
      };
  
      const deleteHandler = (idx) => {
        let temp = [...users];
  
        temp.splice(idx, 1);
  
        this.setState({ users: temp });
      };
  
      const renderUsers = () => {
        return users.map((val, idx) => {
          if (idx == activeEditIdx) {
            return (
              <tr>
                <td>{idx + 1}</td>
                {/* <td>{val.username}</td> */}
                <td>
                  <input type="text" placeholder={val.username} />
                </td>
                <td>
                  <input
                    type="button"
                    value="Delete"
                    className="btn btn-danger"
                    onClick={() => deleteHandler(idx)}
                  />
                </td>
              </tr>
            );
          } else {
            return (
              <tr>
                <td>{idx + 1}</td>
                <td>{val.username}</td>
                <td>
                <Link to={`/profile/${val.username}`}>
                <input
                    type="button"
                    value="Edit"
                    className="btn btn-info"
                  />
                </Link>
                </td>
              </tr>
            );
          }
        });
      };
      if (!isLoggedIn){
        
      return (
        <div>
          <h1>Auth Screen</h1>
          <center className="container">
            <div className="card p-5" style={{ width: "400px" }}>
              <h4>Register</h4>
              <input
                value={username}
                className="form-control mt-2"
                type="text"
                placeholder="Username"
                onChange={(e) => inputHandler(e, "username")}
              />
              <input
                value={password}
                className="form-control mt-2"
                type="text"
                placeholder="Password"
                onChange={(e) => inputHandler(e, "password")}
              />
              <input
                value={repPassword}
                className="form-control mt-2"
                type="text"
                placeholder="Repeat Password"
                onChange={(e) => inputHandler(e, "repPassword")}
              />
              <input
                type="button"
                value="Register"
                className="btn btn-primary mt-3"
                onClick={registerHandler}
              />
            </div>
            {/* <table className="table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Username</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{renderUsers()}</tbody>
            </table> */}
            <div className="card p-5" style={{ width: "400px" }}>
              <h4>Login</h4>
              <input
                value={loginUsername}
                className="form-control mt-2"
                type="text"
                placeholder="Username"
                onChange={(e) => inputHandler(e, "loginUsername")}
              />
              <input
                value={loginPassword}
                className="form-control mt-2"
                type="text"
                placeholder="Password"
                onChange={(e) => inputHandler(e, "loginPassword")}
              />
              <input
                type="button"
                value="Login"
                className="btn btn-primary mt-3"
                onClick={loginHandler}
              />
            </div>
            {isLoggedIn ? <h2>Welcome {currentUsername}</h2> : null}
          </center>
        </div>
      );
      } else {
        return< Redirect to={`/profile/${currentUsername}`}/>
      }
    }
  }
  
  export default AuthScreen;