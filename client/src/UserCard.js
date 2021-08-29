function UserCard(props) {

    return (
        <div>{props.user.username} - {props.user.birthday} <button>Add as Friend</button></div>
    )
}

export default UserCard;