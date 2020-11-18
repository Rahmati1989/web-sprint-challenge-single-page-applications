import React from "react";
import {Link, Route} from 'react-router-dom';
import './App.css'
import Form from "./components/Form";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
    
      <nav>
        <h1>Lambda Eats</h1>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/pizza">Pizza</Link>
        </ul>
      </nav>

      <Route exact path="/" component={Home}/>
      <Route exact path="/pizza" component={Form} />
    </div>
  );
};
export default App;
