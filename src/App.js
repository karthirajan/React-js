import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';
import FirstComponent from './Components/Demo/FirstComponent';
import Counter from './Components/Counter/Counter';
import MountingComponent from './Components/Demo/MountingComponent';
import UpdatingComponent from './Components/Demo/UpdatingComponent';
import UnMountingComponent from './Components/Demo/UnMountingComponent';
import UnControlledComponent from './Components/Demo/UnControlledComponent';
import ControlledComponent from './Components/Demo/ControlledComponent';
import ListComponent from './Components/Demo/ListComponent';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import './Bootstrap.css'
import UserApp from './Components/Users/UsersApp';

function App() {

  return (
    <div className='App'>
      <UserApp/>
      {/*<Router>
        <Routes>
          <Route path='/' element={<ControlledComponent/>}/>
          <Route path='/login' element={<ControlledComponent/>}/>
          <Route path='/tables' element={<ListComponent/>}/>
          <Route path='/counter' element={<Counter/>}/>
          <Route path='/welcome' element={<WelcomeComponent/>}/>
        </Routes>
    </Router>*/}
    </div>
  );


}


function WelcomeComponent() {
    return (
      <div>
          Welcome User to React JS
          <br></br>
          <button className='btn btn-success'><Link to='/tables'>Go to Tables</Link></button>
      </div>
    )
  }







export default App;
