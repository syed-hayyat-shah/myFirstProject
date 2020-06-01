import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
// import { Navbar, Nav, NavDropdown, Form,  FormControl, Button, Table} from 'react-bootstrap';
import Navbar from './components/navbar'
import CardRow from './components/CardRow'
import Coursel from './components/Coursel'

function App() {
  return (
    <>
      <Navbar />
      <CardRow />
      {/* <Coursel/> */}
    </>
   
  );
}


export default App;
