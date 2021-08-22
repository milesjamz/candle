import React, {useState} from 'react';

function Login() {

    const [user, setUser] = useState({
        email:'',
        password:'',
    });


    const handleSubmit = evt => {
        evt.preventDefault();
        alert(`Submitting ${user.name}`)
    }


    return (
        <div>
            <h2>LOG IN</h2>
            <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label><input type='email'/><br/>
            <label htmlFor="password">Password:</label><input type='password'/><br/>
            </form>
        </div>
    )
}

export default Login;