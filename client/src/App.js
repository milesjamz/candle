import './App.css';
import Navbar from './navbar';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';
import React, { useState } from "react";


function App() {

  const thedate = new Date()

  const [settings, setSettings] = useState({
    loggedIn:false,
    currentUser:''
});

  //grabbing from API
  // console.log(thedate)
  // fetch('http://localhost:8080')
  // .then(resp => resp.json())
  // .then(data => console.log(data))

  //this day API
  // fetch('http://history.muffinlabs.com/date/2/5')
  // .then(resp => resp.json())
  // .then(data => console.log(data))

const logIn = (user) => {
  console.log(user)
    setSettings({ ...settings, loggedIn:true, currentUser:user})
}

  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
<h1 className="candleTitle">CANDLE</h1>
It is currently {thedate.toDateString()}<br />
You are {settings.currentUser ? settings.currentUser.username : 'not in'}, and are {settings.loggedIn ? 'Logged In' : 'Not Logged In'}
<Login login={logIn}/>
<Signup/>
<Profile user={settings.currentUser} />
      </header>
    </div>
  );
}

export default App;
