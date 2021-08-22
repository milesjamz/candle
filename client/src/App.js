import './App.css';
import Navbar from './navbar';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';

function App() {

  const thedate = new Date()
  console.log(thedate)

  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
<h1>CANDLE</h1>
It is currently {thedate.toDateString()}
<Login/>
<Signup/>
<Profile/>
      </header>
    </div>
  );
}

export default App;
