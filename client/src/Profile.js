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
  console.log(utc1,utc2,dateOne,dateTwo)
  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

    const user = {
        name:"Miles",
        bDay:new Date('8/31/2021').toLocaleString(),
        altBday:new Date('9/21/1985')
    }
    // const bDay = new Date('09/09/2021').toLocaleString()
    const today = new Date()
    const difference = dateDiffInDays(today,user.bDay)

    //calc percentage of biological year to power the progress bar
    const percentage = Math.round((difference/365) * 100)

    const cleanBday = [user.altBday.getMonth()+1, user.altBday.getDate(), user.altBday.getFullYear()]
    const cleanToday = [today.getMonth()+1, today.getDate(), today.getFullYear()]
    console.log(cleanBday, cleanToday)

    // finds my age - the days aren't working
    const myAge = cleanToday[0] > cleanBday[0] ? (cleanToday[2] - cleanBday[2]) : cleanToday[1] >= cleanBday[1] ? (cleanToday[2] - cleanBday[2]) : (cleanToday[2] - cleanBday[2]) - 1
    //calc the zodiac

    function zodiac(day, month){
        // returns the zodiac sign according to day and month ( https://coursesweb.net/ )
        var zodiac =['', 'Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'];
        var last_day =['', 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
        return (day > last_day[month]) ? zodiac[month*1 + 1] : zodiac[month];
       }

    return (
        <div>
            <h2>PROFILE</h2>
            Hello, {user.name}! <br/>
            You are {myAge} years old.<br/>
            Your next birthday, {user.bDay} is {difference} days away!<br/>
            Your birthstone is {birthstones[user.bDay.split('/')[0]-1]}<br/>
            Your zodiac sign is {zodiac(user.bDay.split('/')[1],user.bDay.split('/')[0] )}<br/>
            Amount of current year finished:<ProgressBar height={'40%'} bgcolor={'red'} progress={percentage}/>

        </div>
    )
}

export default Profile;