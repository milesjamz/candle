import React, { useEffect, useState } from "react";
import ProgressBar from './ProgressBar'
import UserList from './UserList'
import FactsContainer from './FactsContainer'

function Profile(props) {

// const monthcolors = ['#bc2a95','#8d2095','#5d1793','#1653ca','#4db1c0','#409629','#7fc73d','#fffe54','#f9cd46','#f29d38','#f16e2e','#ee3421']
const birthstones = ["Garnet","Amethyst","Bloodstone","Diamond","Emerald","Pearl","Ruby","Sardonyx","Sapphire","Opal","Topaz","Turqoise"]
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

const [facts, setFacts] = useState({
    dayFacts:[],
    loaded:false
});

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

// //   this day API
useEffect(() => {
    if (facts.loaded === false) {
  fetch(`http://history.muffinlabs.com/date/${props.user.birthday.split('-')[1]}/${props.user.birthday.split('-')[2]}`)
  .then(resp => resp.json())
  .then(data => setFacts({dayFacts:data, loaded:true}) )
    }
  })

    const today = new Date()

    const cleanBday = props.user.birthday ? [parseInt(props.user.birthday.split('-')[1],10), parseInt(props.user.birthday.split('-')[2],10), parseInt(props.user.birthday.split('-')[0],10)] : 'nothing'
    const cleanToday = [today.getMonth()+1, today.getDate(), today.getFullYear()]
    console.log(cleanBday, cleanToday)

    // finds my age
    const myAge = cleanBday[0] < cleanToday[0] || cleanBday[0] == cleanToday[0] && cleanBday[1] <= cleanToday[1] ? (cleanToday[2] - cleanBday[2]) : (cleanToday[2] - cleanBday[2]) - 1
   
   //find next bday
    const nextBirthday = cleanBday[0] < cleanToday[0] || cleanBday[0] == cleanToday[0] && cleanBday[1] <= cleanToday[1] ? [cleanBday[0],cleanBday[1],cleanToday[2]+1] : [cleanBday[0],cleanBday[1],cleanToday[2]]
    const difference = dateDiffInDays(today,nextBirthday)

    const dayOfWeek = days[new Date(cleanBday.join('-')).getDay()]

    //calc percentage of biological year to power the progress bar
    const percentage = 100 - Math.round((difference/365) * 100)

   
    //calc the zodiac
    function zodiac(day, month){
        // returns the zodiac sign according to day and month ( https://coursesweb.net/ )
        var zodiac =['', 'Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'];
        var last_day =['', 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
        return (day > last_day[month]) ? zodiac[month*1 + 1] : zodiac[month];
       }
//adds suffix to ages and years
       function ordinal(number) {
        const english_ordinal_rules = new Intl.PluralRules("en", {
            type: "ordinal"
        });
        const suffixes = {
            one: "st",
            two: "nd",
            few: "rd",
            other: "th"
        }
        const suffix = suffixes[english_ordinal_rules.select(number)];
        return (number + suffix);
    }

    return (
        <div>
            <h2>{props.user.username}</h2>
            Hello, {props.user.username ? props.user.username : 'nobody'}! <br/>
            You are {props.user ? myAge : 'loading'} years old.<br/> 
            You were born on a {dayOfWeek}. <br />
            Your next birthday, {props.user.birthday ? nextBirthday.join('/') : 'loading'}, is {difference} days away.<br/>
            Your birthstone is {birthstones[cleanBday[0]-1]}.<br/>
            Your zodiac sign is {zodiac(cleanBday[1],cleanBday[0] )}.<br/>
            <FactsContainer facts={facts} />
            Amount of your {ordinal(myAge)} year finished:<ProgressBar height={'40%'} bgcolor={'red'} progress={percentage}/><br />
            <UserList currentUser={props.user} />
        </div>
    )
}

export default Profile;