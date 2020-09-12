import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './components/layout/Navbar';
import AddEmployee from './components/employee/AddEmployee';
import EmployeeList from './components/employee/EmployeeList';
import Footer from './components/layout/Footer';
import SearchEmployee from './components/employee/SearchEmployee';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
        <Route exact path='/' component={EmployeeList}></Route>
          <Route path='/employee/:id' component={Navbar}></Route>
          <Route path='/create' component={AddEmployee}></Route>
          <Route path='/search' component={SearchEmployee}></Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
