import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './assets/css/app.css';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Menu from './components/pages/Menu';
import Gallery from './components/pages/Gallery';
import Contact from './components/pages/Contact';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.connecToServer = this.connecToServer.bind(this);
  }

  connecToServer() {
    fetch('/')
  }

  componentDidMount() {
    this.connecToServer();
  }

  render() {
    return (
      <Router>
        <div className="some-random-class">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/about" component={About} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/contact" component={Contact} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
