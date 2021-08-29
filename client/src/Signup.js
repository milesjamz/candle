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
        console.log(user)
        fetch(`http://localhost:3000`, {
            method: 'post',
            body: JSON.stringify(user)
        })
        .then(resp => resp.json())
        .then(json => console.log(json))
        .catch(err => console.log(err))
        // alert(`Submitting ${user.name}`)
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
            <label htmlFor="password">Password:</label>
                    <input type='password'
                    value={user.password} 
                    name="password"
                    onChange={e => setUser({ ...user, password: e.target.value}) } /><br/>
            <label htmlFor="email">Email:</label>
                    <input type='email'
                    value={user.email}
                    name="email"
                    onChange={e => setUser({ ...user, email: e.target.value}) } /><br/>
            <label htmlFor="birthday">Birthday:</label>
                    <input type='date'
                    value={user.birthday}
                    name='birthday'
                    onChange={e => setUser({ ...user, birthday: e.target.value}) }/><br/>
            <input type='submit' />
            </form>
        </div>
    )
}

export default Signup;