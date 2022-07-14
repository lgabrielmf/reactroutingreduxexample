import React, {Component} from "react";
import {HashRouter, NavLink, Route} from "react-router-dom";
import Home from "./app/screens/home/Home";
import "./app/assets/bootstrap/bootstrap.css";
import "./index.css";
import "./app/assets/css/style.css";
import Teste from './app/screens/teste/teste';
import TesteComponent from "./app/screens/teste/teste-component";

class App extends Component {
  render() {
    return (
        <HashRouter>
          {
            <div className="container">
              <div className="header">
                {/*<div className="logo">*/}
                {/*  <img src={require('./app/assets/images/logo.png')} alt="Logo" />*/}
                {/*</div>*/}

                <div className="menu">
                  <ul className="menuHeader">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/teste">Teste</NavLink></li>
                    <li><NavLink to="/testeComponent">Teste Component</NavLink></li>
                  </ul>
                </div>
              </div>
              <div className="content">
                <Route exact path="/" component={Home} />
                <Route path="/teste" component={Teste} />
                <Route path="/testeComponent" component={TesteComponent} />
              </div>
            </div>
          }
        </HashRouter>
    );
  }
}

// export default Main;
export default App;
