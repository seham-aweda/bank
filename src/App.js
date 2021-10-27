import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutUs from "./components/homepage";
import UsersList from "./components/usersList";
import AdminTransfer from "./components/admin";


function App() {
  return (
    
    <div className="App">
      
      <Router>
        <div>
          <nav >
            <ul className={"list"}>
              <li>
                <Link to="/" >Home</Link>
              </li>
              <li>
                <Link to="/users" >Users</Link>
              </li>
              <li>
                <Link to="/admin" >Admin</Link>
              </li>
              <li>
                <Link to="/transfer" >Transfer</Link>
              </li>
            </ul>
          </nav>
         
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/admin">
              <AdminTransfer/>
            </Route>
            <Route path="/users">
             <UsersList/>
            </Route>
            <Route path="/transfer">
              <div>In progress...<br/> 
              משתמש יקר <br/>
לאור הביקוש הדחוף והלחוץ מצד הלקוח  <br/>
 אנו מתנצלים על חוסר המידע באתר שלנו   <br/>
 🙁האתר עדיין בשלבי פיתוח וטרם נגמר  <br/>
התהליך יסתיים בעוד שנה מעכשיו כי כל הזמן יש דרישות אינסופיות מהלקוח שלנו  <br/>
🙃מקווים שבשלב מסויים זה יהיה מוכן לשימוש שלך <br/>
🌺באהבה צוות הפיתוח 
              </div>
            </Route>
            <Route path="/">
             <AboutUs/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
    
  );
}

export default App;
