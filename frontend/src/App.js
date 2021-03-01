import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home.js';
import Documentation from './pages/Documentation.js';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/documentation' component={Documentation}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
