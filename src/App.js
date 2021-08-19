
import './App.css';
import React from 'react';
import { Table} from './components/Table';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Subs } from './components/Subs';
import Nav from './components/Nav';
import Sidenav from './components/Sidebar';

function App() {
  return (
      <Router>
        <Nav />
        <Sidenav />
      <Switch>
        
        <Route path="/" exact component={Table} />
        <Route path="/plans/:id" component={Subs}/>
      </Switch>  
      </Router>
  );
}

export default App;
