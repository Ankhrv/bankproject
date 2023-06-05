import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header/Header';
import Menu from './Menu/Menu';
import MenuBaner from './Baner/MenuBaner';
import First from './Str/First';
import Two from './Str2/Two';
import Three from './Str3/Three';
import For from './Str4/For';


const App = () => {
    return (
    <div className="App"> 
    
    <Header/> 
    <Menu/>
    <MenuBaner/>
    <First/>
    <Two/>
    <Three/>
    <For/> 
 </div>
  );
}

export default App;
