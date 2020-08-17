import React from "react";
import NavBar from './Components/NavBar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Form from "./Components/Form";
import Home from "./Components/Home";

const App = () => {
  return (
    <BrowserRouter>
      
      <NavBar />
        <Switch>
          <Route path="/pizza" render={() => <Form />} />
          <Route path="/" component={Home} />
        </Switch>
    </BrowserRouter>
    
  );
};
export default App;
