function Navbar(props) {
    return (
        <div className="navbar">
        CANDLE
        <span className='avatar'>{props.user ? props.user.username[0].toUpperCase() : '?'}</span>
        </div>
    )
}

export default Navbar;