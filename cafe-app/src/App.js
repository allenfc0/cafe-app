 
 //react
import React, { Component } from 'react';

//css & bootstrap
//import './App.css';
import './HomeStyle.css';
import './Bootstrap.css'
import './JobStyle.css'
import './ContactStyle.css'
import './ShopStyle.css'

//components
import WebApp from './components/app/WebApp'


class App extends Component {
  render() {
    return (
      <div className="App">
        <WebApp/>
      </div>
    );
  }
  
}

export default App;
