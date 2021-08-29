import React, { useEffect, useState } from "react";
import UserCard from './UserCard'

function UserList(props) {


    const [users, setUsers] = useState({
        users:[],
        loaded:false
    });

    const filterUsers = users => {
        // return users
        return users.filter(user => user.id !== props.currentUser.id )
    }


    useEffect(() => {
        if (users.loaded === false) {
        fetch(`http://localhost:3000/api/v1/users`)
        .then(resp => resp.json())
        .then(parsedJson => setUsers({users:filterUsers(parsedJson),loaded:true}) )
        }
      })

      const makeCards = () => {
        console.log(users.users)
        return users.users ? users.users.map(user => <li key={user.id}> <UserCard user={user} /> </li>) : null
      }

    return (
        <div>
            Find Other Users:
            <ul>
            {makeCards()}
            </ul></div>
    )
}

export default UserList;