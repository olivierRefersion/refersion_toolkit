import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//import CreateUser from "./components/create-user.component";
import Form from "./Components/Form.js";



function App() {
  return (
    
      <Form/>
    
  // <Router>
  //   <div className="App">
  //     <header>
  //             <ul>
  //             <li>
  //               <Link className="nav-link" to={""}>Create User</Link>
  //             </li>
  //             <li className="nav-item">
  //               <Link className="nav-link" to={"/users"}>Form</Link>
  //             </li>
  //           </ul>
         
  //     </header>
  //     <div className="container">
  //       <div className="row">
  //         <div className="col-md-12">
  //           <Routes>
  //             <Route exact path='/users' component={Form} />
  //           </Routes>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </Router>
  );
}
export default App;


















// import './App.css';
// import Form from './Components/Form';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//     <Form/>
//   );
// }

// export default App;
