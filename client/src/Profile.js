function Profile() {

// this takes two dates in DD/MM/YYYY format and provides the date difference between them
const _MS_PER_DAY = 1000 * 60 * 60 * 24;
function dateDiffInDays(a, b) {
  let dateOne = new Date(a)
  let dateTwo = new Date(b)
  const utc1 = Date.UTC(dateOne.getFullYear(), dateOne.getMonth(), dateOne.getDate());
  const utc2 = Date.UTC(dateTwo.getFullYear(), dateTwo.getMonth(), dateTwo.getDate());
  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}
    const user = {
        name:"Primo",
        bDay:new Date('09/09/2021').toLocaleString()
    }
    // const bDay = new Date('09/09/2021').toLocaleString()
    const today = new Date()

    return (
        <div>
            <h2>PROFILE</h2>
            Hello, {user.name}! <br/>
            Your next birthday {dateDiffInDays(today,user.bDay)} is days away!

        </div>
    )
}

export default Profile;