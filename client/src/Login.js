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
            <label htmlFor="email">Email:</label>
                <input type="email"
                       value={user.email}
                       name="email"
                       onChange={e => setUser({ ...user, email: e.target.value}) }
                       />
                       
                       <br/>
            <label htmlFor="password">Password:</label>
                <input type='password'
                       value={user.password}
                       name="password"
                       onChange={e => setUser({ ...user, password: e.target.value}) }
                       /><br/>
            </form>
        </div>
    )
}

export default Login;