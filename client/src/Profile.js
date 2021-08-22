import ProgressBar from './ProgressBar'

function Profile() {


const birthstones = ["Garnet","Amethyst","Bloodstone","Diamond","Emerald","Pearl","Ruby","Sardonyx","Sapphire","Opal","Topaz","Turqoise"]




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
        name:"Miles",
        bDay:new Date('02/05/2022').toLocaleString()
    }
    // const bDay = new Date('09/09/2021').toLocaleString()
    const today = new Date()
    const difference = dateDiffInDays(today,user.bDay)
    const percentage = Math.round((difference/365) * 100)
    console.log(user)

    return (
        <div>
            <h2>PROFILE</h2>
            Hello, {user.name}! <br/>
            Your next birthday, {user.bDay} is {difference} days away!<br/>
            Your birthstone is 
            Amount of current year finished:<ProgressBar height={'100%'} bgcolor={'red'} progress={percentage}/>

        </div>
    )
}

export default Profile;