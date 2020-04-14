import React, { Component } from 'react'

// const CounterScreen = () => {
//     return(
//         <div> 
//     <h1> Hello!</h1>
//     </div>
//     )
// }

// class CounterScreen extends React.Component{
//     render(){
//         return(
//             <div> 
//     <h1> Hello! {this.props.terserah}</h1>
//     </div>
//         )
        
//     }
// }
// export default CounterScreen

// const CounterScreen = (props) => {
//     return(
//         <div> 
//     <h1> {props.kota}!</h1>
//     </div>
//     )
// }

// class CounterScreen extends React.Component{
//     render(){
//         return(
//             <div> 
//     <h1> Hello! {this.props.kota}</h1>
//     </div>
//         )
        
//     }
// }
// export default CounterScreen


class CounterScreen extends React.Component{
   state ={
       counter: 1,
       namaku: "bento"
   }
   render (){
       return (
           <div> 
               <h1>
                   {this.state.counter} {this.state.namaku}
               </h1>
               <input className="btn btn-primary"
               type="button"
               value="Click Me"
               onclick={() => this.setState({counter : this.state.counter + 1})}
               />
           </div>
       )
   }
}
export default CounterScreen
