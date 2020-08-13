import React from "react";
import {HashRouter as Router, Route} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Portfolio from './Portfolio'
import PuntersClub from './PuntersClub'


class App extends React.Component {
  render() {
    console.log("works");
    
    return (
        <Router>
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/portfolio" component={Portfolio}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/puntersclub" component={PuntersClub}/>
        <Footer/>
        </Router>
    )
  }
}

export default App;
