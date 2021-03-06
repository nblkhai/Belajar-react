// import React from 'react'
// import {Link} from 'react-router-dom'
// import {connect} from 'react-redux'

// class InputScreen extends React.Component{
    
//     state = {
//         username: "",
//         email: "",
//         textbox: "",
//     }
//      inputHandler = (e, field) => {
//         this.setState({[field]: e.target.value})
//     }
    
//     render(){
//         const {username, email, textbox} = this.state
//         // e => event
       

//         return(
//             <div>
//                 <h1>{this.props.haloDunia}</h1>
//                 <h1>Input Screen</h1>
//                 <h3>Username: {username} </h3>
//                 <h3>Email: {email}</h3>
//                 {/* onChange ={(e)=> inputHandler(e)} */}
//                 {/* onChange={inputHandler} */}
//                 <input onChange ={(e)=> this.inputHandler(e, "username")} type="text" placeholder="Username"/>
//                 <br />
//                 <input onChange ={(e)=> this.inputHandler(e, "email")} type="text" placeholder="email"/>
//                 <Link to={'/profile/'+ username}>
//                 <input type="button" value="Login" className="btn btn-primary mt-3"/>
//                 </Link>
//                 <br/>
//                 <textarea onChange ={(e)=> this.inputHandler(e, "textbox")} cols="30" rows="10"></textarea>
//                 <p>{textbox.length}/140</p>
                
                
//             </div>
//         )
//     }
// }
// const mapStateToProps = (state) => {
//     return{
//       haloDunia: state.haha.todoInput
//     }
//   }

//   export default connect(mapStateToProps)(InputScreen)

import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class InputScreen extends React.Component {
  state = {
    username: "",
    email: "",
    textbox: "",
  };

  inputHandler = (event, field) => {
    this.setState({ [field]: event.target.value });
  };

  render() {
    const { username, email, textbox } = this.state;

    return (
      <div className="container">
        <h1>{this.props.haloDunia}</h1>
        <h1>Input Screen</h1>
        <h3>Username: {username} </h3>
        <h3>Email: {email} </h3>
        <input
          onChange={(e) => this.inputHandler(e, "username")}
          // onChange={this.inputHandler}
          type="text"
          placeholder="Username"
        />
        <br />
        <input
          onChange={(e) => this.inputHandler(e, "email")}
          type="text"
          placeholder="Email"
        />
        <Link to={"/profile/" + username}>
          <input type="button" className="btn btn-primary" value="Login" />
        </Link>
        <br />
        <textarea
          onChange={(e) => this.inputHandler(e, "textbox")}
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <p> {textbox.length} / 140</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // Bisa diakses lewat props
    haloDunia: state.haha.todoInput,
  };
};

export default connect(mapStateToProps)(InputScreen);