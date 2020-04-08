import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewScreen from './view/screen/NewScreen';
import TableProduct from './view/components/TableProduct';

let arr = ["Jakarta", "Lampung", "Padang"]

// const renderArr = () => {
//   return arr.map((val) => {
//     <>
//       <p>{val}</p>
//       <NewScreen/>
//     </>
//   })
// }

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2 style={{border: "1px solid red", marginTop : "30px"}}>Test Styling</h2>
      <NewScreen/>
      {/* {renderArr()} */}
      <TableProduct/>
    </div>
  );
}

export default App;
