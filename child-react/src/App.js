import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter basename='/react'>
          <Link to="/">首页</Link>
          <Link to="/about">关于</Link>
          <Route path="/" exact render={()=>(<div className="App">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>首页</p>
              </header>
          </div>)}></Route>
          <Route path="/about" render={()=>(<div className="App">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>关于页</p>
              </header>
          </div>)}></Route>
      </BrowserRouter>
  );
}

export default App;
