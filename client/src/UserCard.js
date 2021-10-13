function UserCard(props) {

const addMe = e => {
    // console.log(props.currentUser.id,e.target.id)
    const newFollow = {follower_id:props.currentUser.id,followed_user_id:parseInt(e.target.id,10)}
    console.log(newFollow)
    fetch(`http://localhost:3000/api/v1/users/${parseInt(e.target.id,10)}/follow`, {
        method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                  }
                //   ,
                //   body: JSON.stringify({follow: newFollow})
    }).then(resp => resp.json()).then(response => console.log('hello!!!',response))
    props.update()
}

const deleteMe = e => {
    console.log('deletin',e.target)
    // fetch(`http://localhost:3000/api/v1/journey_locations/${deletedLocation.id}`, {
	// 	method: 'DELETE' })
	// 	.then(resp => resp.json())
	// 	.then(response => console.log(response))
	// 	.catch(err => {
    // 	console.error(err)
	//   		})
}

const myButton = () => {
// console.log(props)
if (props.context === 'list' || props.context === 'follower') {
return <button id={props.user.id} key={props.user.id} onClick={addMe}> Add as Friend </button>
} else {
return <button id={props.user.id} key={props.user.id} onClick={deleteMe}> Unfollow </button>    
}
}

    // console.log(props)
    return (
         <div className={`userCard-${props.user.birthday.split('-')[1]}` }> {props.user.username} - {props.user.birthday} {myButton()} </div>
        )
        
}

export default UserCard;
