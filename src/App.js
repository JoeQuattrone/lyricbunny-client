import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/Home'
import Songs from './containers/Songs'
import ShowSong from './containers/ShowSong'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route exact path="/songs" component={Songs}/>
      </div>
    </Router>
  );
}

export default App;
