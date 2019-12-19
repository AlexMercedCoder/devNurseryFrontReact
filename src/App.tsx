import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
        <div className="logo"> <span>dev</span>Nursery </div>
        <nav></nav>

    </div>
  );
}

export default App;
