import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './navbarstyle.css'
function App() {
  return (
    <div >
      <Router>
        <div>
          <nav >
            <ul className="list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/admin">Admin</Link>
              </li>
              <li>
                <Link to="/transfer">Transfer</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/admin">
              <div>drgrdddd</div>
            </Route>
            <Route path="/users">
              <div>d333dd</div>
            </Route>
            <Route path="/transfer">
              <div>dshhhhhd</div>
            </Route>
            <Route path="/">
              <div>dsadd</div>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
