import React from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import Cookie from "universal-cookie";
import { connect } from "react-redux";
import { userKeepLogin } from "./redux/actions";

import logo from "./logo.svg";
import "./App.css";
import NewScreen from "./view/screen/NewScreen";
import TableProduct from "./view/components/TableProduct";
import CounterScreen from "./view/screen/CounterScreen";
import ProductCard from "./view/components/ProductCard";

import WeekendTask from "./view/components/WeekendTask";
import Brave from "./brave.png";
import Crazy from "./crazyRich.png";
import Educated from "./educated.png";
import Handmaid from "./handmaid.png";

import InputScreen from "./view/screen/InputScreen";
import AuthScreen from "./view/screen/AuthScreen";
import LifecycleScreen from "./view/screen/LifecycleScreen";
import HomeScreen from "./view/screen/HomeScreen";
import PageNotFound from "./view/screen/PageNotFound";
import Navbar from "./view/components/Navbar";
import ProfileScreen from "./view/screen/ProfileScreen";
import RegisterScreen from "./view/screen/RegisterScreen";
import LoginScreen from "./view/screen/LoginScreen";
import TodoReduxScreen from "./view/screen/TodoReduxScreen";

// const renderArr = () => {
//   return arr.map((val) => {
//     <>
//       <p>{val}</p>
//       <NewScreen/>
//     </>
//   })
// }

// function App() {
//   let arr = ["Jakarta", "Lampung", "Padang"]
//   const renderArr = () => {
//     return arr.map((val) => {
//       return(
//         <>
//         <p>{val}</p>
//         <NewScreen/>
//         </>
//       )
//     })
//   }
//   return (
//     <div className="App">
//       <CounterScreen terserah='Kamu'/>
//     </div>
//   );
// }

// export default App;

// function App() {
//   let arr = ["Jakarta", "Lampung", "Padang"]
//   const renderArr = () => {
//     return arr.map((val) => {
//       return<CounterScreen kota = {val}/>
//     }) }
//   return (
//     <div className="App">
//       {renderArr()}
//     </div>
//   );
// }

// export default App;

// function App() {
//   let arr = ["Jakarta", "Lampung", "Padang"]
//   const renderArr = () => {
//     return arr.map((val) => {
//       return(
//         <>
//         <p>{val}</p>
//         <NewScreen/>
//         </>
//       )
//     })
//   }
//   return (
//     <div className="App">
//       Hello World!
// <ProductCard/>
//     </div>
//   );
// }
// export default App

// function App() {
//   let arrProduct = [{
//     nama: "Sepatu Basket",
//     harga: 2300000,
//     desc: "Sepatu basket keluaran terbaru loh! Pake sepatu ini auto menang",
//     discount: 20,
//     stock: 10
//   },
//   {
//     nama: "Kaos Polo",
//     harga: 250000,
//     desc: "Tingkatkan penampilanmu menggunakan kaos berkelas ini",
//     discount: 40,
//     stock: 0
//   },
//   {
//     nama: "Celana Jeans",
//     harga: 550000,
//     desc: "Nyaman dan dengan bahan premium gan, stock selalu ready!",
//     discount: 0,
//     stock: 10
//   }]
//   const renderProduct = () => {
//     return arrProduct.map((val) => {
//       return (<ProductCard ProductData={val}/>
//         )
//     })
//   }
//   return (
//     <div className="App">
// {renderProduct()}
//     </div>
//   );

// let arrProduct = [
//   {
//     nama: "Sepatu Basket",
//     harga: 2300000,
//     desc: "Sepatu basket keluaran terbaru loh! Pake sepatu ini auto menang",
//     discount : 20,
//     stock : 10,
//   },
//   {
//     nama: "Kaos Polo",
//     harga: 250000,
//     desc: "Tingkatkan penampilanmu menggunakan kaos berkelas ini",
//     discount : 40,
//     stock : 0,
//   },
//   {
//     nama: "Celana Jeans",
//     harga: 550000,
//     desc: "Nyaman dan dengan bahan premium gan, stock selalu ready!",
//     discount : 0,
//     stock : 5,
//   },
// ]

// const daftarProduk = () => {
//   return arrProduct.map((val) => {
//     return(
//       <ProductCard productData={val}/>
//     )
//   })
// }

// return (
//   <div className="App">
//     {daftarProduk()}
//   </div>
// )
// }
// export default App

// WEEKEND TASK

// function App () {
// let arrBooks = [
//   {
//     author: "Margaret Atwood",
//     title: "The Handmaid's Tale",
//     review: 4,
//     desc: `This novel can be interpreted as a double narrative, Offred's tale and the handmaids' tales. The night...`,
//     price: 18.99,
//     discount: 60,
//     image: Handmaid,
//     stock: 7,
//   },
//   {
//     author: "Kevin Kwan",
//     title: "Crazy Rich Asians",
//     review: 5,
//     desc: `The outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip...`,
//     price: 24.12,
//     discount: 80,
//     image: Crazy,
//     stock: 0,
//   },
//   {
//     author: "Aldous Huxley",
//     title: "Brave New World",
//     review: 3,
//     desc: `Dystopian novel written in 1931 by English author Aldous Huxley, and published in 1932. Largely set in...`,
//     price: 18.99,
//     discount: 60,
//     image: Brave,
//     stock: 3,
//   },
//   {
//     author: "Tara Westover",
//     title: "Educated",
//     review: 4.5,
//     desc: `It is a tale of fierce family loyalty and of the grief that comes with severing the closest of ties. With...`,
//     price: 34.21,
//     discount: 0,
//     image: Educated,
//     stock: 3,
//   },
// ];

// //   const bookList = () => {
// //     return arrBooks.map(val => {
// //       return <div className='col-sm-6'>
// //         <WeekendTask productData={val} />
// //       </div>
// //     })
// //   }

// //   return(
// //     <div className='App'>
// //       <h2>Hello World!</h2>
// //       <div className='row'>{bookList()}</div>
// //     </div>
// //   )
// // }
// // export default App
// const bookList = () => {
//   return arrBooks.map(val => {
//     return <div>
//       <CounterScreen productData={val} />
//     </div>
//   })
// }

// return(
//   <div className='App'>
//     <h2>Hello World!</h2>
//     <div>{bookList()}</div>
//   </div>
// )
// }
// export default App

// const bookList = () => {
//   return arrBooks.map(val => {
//     return <div>
//       <WeekendTask productData={val} />
//     </div>
//   })
// }

// return(
//   <div className='App'>
//     <h2>Hello World!</h2>
//     {/* <div>{bookList()}</div> */}
//     <InputScreen/>
//   </div>
// )
// }
// export default App

// Auth Screen
//   const bookList = () => {
//     return arrBooks.map((val) => {
//       return (
//         <div>
//           <WeekendTask productData={val} />
//         </div>
//       );
//     });
//   };

//   return (
//     <>
//       {/* <div className='App'>
//     {/* <div>{bookList()}</div> */}
//       {/* <AuthScreen/> */}
//       {/* <LifecycleScreen/> */}

//       <BrowserRouter>
//         {/* LifeCyleScreen akan selalu ada disetiap Path */}
//         {/* <LifecycleScreen/>  */}
//         <Navbar />

//         {/* Switch berfungsi untuk mengecek, dia akan ngecek  satu-satu. Posisi yang ada pada Switch sangat berpengaruh.  */}
//         <Switch>
//           <Route exact path="/home" component={HomeScreen} />
//           {/* <Route exact path="/auth" component={AuthScreen}/> */}
//           <Route exact path="/register" component={RegisterScreen} />
//           <Route exact path="/login" component={LoginScreen} />
//           {/* <Route exact path="/input" component={InputScreen}/> */}
//           {/* <Route exact path="/counter" component={CounterScreen}/> */}
//           <Route exact path="/profile/:username" component={ProfileScreen} />
//           {/* <Route exact path="/todo" component={TodoReduxScreen}/> */}
//           {/* <Route exact path="/*" component={PageNotFound}/> */}
//         </Switch>
//       </BrowserRouter>
//     </>
//   );
// }
// export default withRouter(App);

// cookieobjcet berfungsi untuk menyimpan data user
const cookieObject = new Cookie();

class App extends React.Component {
  arrBooks = [
    {
      author: "Margaret Atwood",
      title: "The Handmaid's Tale",
      review: 4,
      desc: `This novel can be interpreted as a double narrative, Offred's tale and the handmaids' tales. The night...`,
      price: 18.99,
      discount: 60,
      image: Handmaid,
      stock: 7,
    },
    {
      author: "Kevin Kwan",
      title: "Crazy Rich Asians",
      review: 5,
      desc: `The outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip...`,
      price: 24.12,
      discount: 80,
      image: Crazy,
      stock: 0,
    },
    {
      author: "Aldous Huxley",
      title: "Brave New World",
      review: 3,
      desc: `Dystopian novel written in 1931 by English author Aldous Huxley, and published in 1932. Largely set in...`,
      price: 18.99,
      discount: 60,
      image: Brave,
      stock: 3,
    },
    {
      author: "Tara Westover",
      title: "Educated",
      review: 4.5,
      desc: `It is a tale of fierce family loyalty and of the grief that comes with severing the closest of ties. With...`,
      price: 34.21,
      discount: 0,
      image: Educated,
      stock: 3,
    },
  ];
  renderBooks = () => {
    return this.arrBooks.map((val) => {
      return <WeekendTask book={val} />;
    });
  };
  componentDidMount() {
    let cookieResult = cookieObject.get("authData");
    console.log(cookieResult);
    if (cookieResult) {
      this.props.userKeepLogin(cookieResult);
    }
  }

  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/home" component={HomeScreen} />
          <Route exact path="/auth" component={AuthScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/input" component={InputScreen} />
          <Route exact path="/counter" component={CounterScreen} />
          <Route exact path="/profile/:username" component={ProfileScreen} />
          <Route exact path="/todo" component={TodoReduxScreen} />
          <Route exact path="/*" component={PageNotFound} />
        </Switch>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  userKeepLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
