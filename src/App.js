import React, { useEffect } from "react";
import './App.css';
import Header from './Pages/Header';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from "./Pages/Login";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Feed from "./Pages/Feed";

function App() {
  return (
<BrowserRouter>
    <div className="app">
      <Switch >
        <Route path= '/register'>
          <Register />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/feed'>
          <Feed />
        </Route>
       

        

        {/* Home page is always the last one as it is prioritised.  */}
        <Route path='/'>
          <Home />
        </Route>
      </Switch>    
      </div>
    </BrowserRouter>
  );
}

export default App;
