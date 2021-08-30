import Party from './birthday.png'

function Landing() {
    return (
        <div className='landing'>
            <div className='opaqueText'>
            <h2>Keep Track of Moments That Matter</h2>
            <p>An easy way to organize you and your friends' birthdays, make and record<br/>  memories,and find new friends.</p>
            <ul>
            <li className='landing-list'><button>Log In</button></li>
            <li><button>Sign Up</button></li>
            </ul>
            </div>
            {/* <img src={Party} alt='birthday party' /> */}
        </div>
    )
}

export default Landing