import './App.css';
import Navbar from './navbar';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';

function App() {

  const thedate = new Date()

  //grabbing from API
  console.log(thedate)
  fetch('http://localhost:8080')
  .then(resp => resp.json())
  .then(data => console.log(data))

  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
<h1 className="candleTitle">CANDLE</h1>
It is currently {thedate.toDateString()}
<Login/>
<Signup/>
<Profile/>
      </header>
    </div>
  );
}

export default App;
