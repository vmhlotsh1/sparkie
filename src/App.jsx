import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Donate from "./Components/Donate";
import Contact from "./Components/Contact";
import Navbar from "./Components/CustomNav";
import './App.css';

class App extends React.Component {
      render() {
        return (
          <Router>
           <div>
                <Navbar />
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/donate" component={Donate}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path=""/>
           </div>
          </Router>
        );
      }
}

export default App;
