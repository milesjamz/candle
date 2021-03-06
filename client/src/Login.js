import React, {useState} from 'react';

function Login(props) {

    const [user, setUser] = useState({
        username:'',
        password:'',
    });


    const getProfileFromServer = () => {
        // --- gets your profile from the server ---
            if (localStorage.token) {
              console.log('DID THIS WORK')
              fetch("http://localhost:3000/api/v1/profile", {
                headers: {
                  Authorization: `Bearer ${localStorage.token}`
                }
              })
                .then(res => res.json())
                .then(profileData => {
                    console.log(profileData)
                    props.login(profileData.user)
                });
            }
          };




    const handleSubmit = evt => {
        evt.preventDefault();
        console.log(`submitting ${user}`)
            // --- logs in the user ---
                fetch("http://localhost:3000/api/v1/login", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                  },
                  body: JSON.stringify({user: user})
                })
                  .then(res => res.json())
                  .then(data => {
                      console.log(data)
                    if (data.jwt) {
                      localStorage.setItem("token", data.jwt);
                      getProfileFromServer()
                    // console.log('yes')
                    } else {
                      alert("Your info doesn't match our records; please try again.");
                    }
                  });
            }


    return (
        <div>
            <h2>LOG IN</h2>
            <form onSubmit={handleSubmit}>
            <label htmlFor="username">username:</label>
                <input type="username"
                       value={user.username}
                       name="username"
                       onChange={e => setUser({ ...user, username: e.target.value}) }
                       />
                       
                       <br/>
            <label htmlFor="password">Password:</label>
                <input type='password'
                       value={user.password}
                       name="password"
                       onChange={e => setUser({ ...user, password: e.target.value}) }
                       /><br/>
                       <input type='submit' />
            </form>
        </div>
    )
}

export default Login;