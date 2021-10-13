import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";


function Landing() {
    return (
        <div className='landing'>
            <div className='opaqueText'>
            <h2>Keep Track of Moments That Matter</h2>
            <p>An easy way to organize you and your friends' birthdays, make and record
            memories, and find new friends.</p>
            <ul id='landingList'>
            <li><Link to='/login'><button className='loginBtn'>Log In</button></Link></li>
            <li><Link to='/signup'><button className='loginBtn'>Sign Up</button></Link></li>
            </ul>
            </div>
        </div>
    )
}

export default Landing