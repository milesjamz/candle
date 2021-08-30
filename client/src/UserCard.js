function UserCard(props) {

const addMe = e => {
    const newFollow = {follower_id:props.currentUser.id,followed_user_id:parseInt(e.target.id,10)}
    console.log(newFollow)
    fetch(`http://localhost:3000/api/v1/follows`, {
        method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                  },
                  body: JSON.stringify({follow: newFollow})
                
    })
}

    return (
        <div className="usercard">{props.user.username} - {props.user.birthday} <button id={props.user.id} key={props.user.id} onClick={addMe}>Add as Friend</button></div>
    )
}

export default UserCard;

//8th floor.
//mother baby is on 13th floor
//NICU is on 9th floor.

//when you arrive, come to 1st bw 32nd and 33rd port cochere. GO HERE.
//there's valet parking hut to 

//walk down BLUE pathway.
//first place to go is triage room most likely
//first assessments, to prioritise flow of patients. there are 12 labor/delivery rooms.
//this can take time, screening, health questions, etc. from 45 mins to several hours.
//covid test booo
//l+d room comes next.  
//bring masKs etc.
//
//A