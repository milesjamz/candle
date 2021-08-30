import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function Landing() {
    return (
        <div className='landing'>
            <div className='opaqueText'>
            <h2>Keep Track of Moments That Matter</h2>
            <p>An easy way to organize you and your friends' birthdays, make and record<br/>  memories,and find new friends.</p>
            <ul>
            <li><Link to='/login'><button>Log In</button></Link></li>
            <li><Link to='/signup'><button>Sign Up</button></Link></li>
            </ul>
            </div>
        </div>
    )
}

export default Landing