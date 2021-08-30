import './App.css';
import Navbar from './navbar';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';
import Landing from './Landing'
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

function App() {
  var history = useHistory();

  // const thedate = new Date()

  const [settings, setSettings] = useState({
    loggedIn:false,
    currentUser:''
});

const logIn = (user) => {
  console.log(user)
    setSettings({ ...settings, loggedIn:true, currentUser:user})
    history.push('/');
}

const logOut = () => {
  setSettings({ ...settings, loggedIn:false, currentUser:''})
}

const updateCurrentUser = () => {
  fetch(`http://localhost:3000/api/v1/users/${settings.currentUser.id}`)
  .then(resp => resp.json())
  .then(response => setSettings({...settings, loggedIn:true, currentUser:response}))
}

// It is currently {thedate.toDateString()}<br />
// You are {settings.currentUser ? settings.currentUser.username : 'not in'}, and are {settings.loggedIn ? 'Logged In' : 'Not Logged In'}


  return (
    // <Router>
    <div className="App">
      {settings.loggedIn ? <Navbar user={settings.currentUser} /> : null}
      <header className="App-header">
<h1 className="candleTitle"><Link to="/">CANDLE</Link></h1>
<Switch>
  <Route exact path='/'>
  {!settings.loggedIn ? <Landing  />: <Profile update={updateCurrentUser} user={settings.currentUser} />}
  </Route>
  <Route path='/login'>
  {!settings.loggedIn ? <Login login={logIn} />: null}
  </Route>
  <Route path="/signup">
  {!settings.loggedIn ? <Signup login={logIn} /> : null}
  </Route>
</Switch>
{/* {!settings.loggedIn ? <Landing  />: null} */}
{/* {!settings.loggedIn ? <Signup login={logIn} /> : null} */}
{/* {settings.loggedIn ? <Profile update={updateCurrentUser} user={settings.currentUser} /> : null } */}
{settings.loggedIn ? <button onClick={logOut}>Sign Out</button> : null }
      </header>
    </div>
    // </Router>
  );
}

export default App;
