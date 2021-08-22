import React, { useState } from "react";

function Signup() {

    const [user, setUser] = useState({
        name:'',
        password:'',
        email:'',
        birthday:''
    });

    const handleSubmit = evt => {
        evt.preventDefault();
        alert(`Submitting ${user}`)
    }

    return (
        <div>
            <h2>SIGN UP</h2>
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
                        <input type='text' 
                        value={user.name} 
                        name="name"
                        onChange={e => setUser({ ...user, name: e.target.value}) }/><br/>
            <label htmlFor="password">Password:</label><input type='password'/><br/>
            <label htmlFor="email">Email:</label><input type='email'/><br/>
            <label htmlFor="birthday">Birthday:</label><input type='date'/><br/>
            <input type='submit' />
            </form>
        </div>
    )
}

export default Signup;