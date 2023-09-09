
// function to get the current day of the week
getCurrentDayOfWeek = () => {
    const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = new Date();
    const dayOfTheWeekIndex = currentDay.getDay();
    const day = daysOfTheWeek[dayOfTheWeekIndex];

    return day
}

// // display the current day of the week in the html document


const currentDayOfWeekElement = document.getElementById('dayOfTheWeek');

currentDayOfWeekElement.textContent = getCurrentDayOfWeek();


// function to get the current UTC time

// getCurrentUTCTime = () => {
//     const currentUTCTime = new Date(); 
//     const time = currentUTCTime.getTime();

//     return time
// }

// // display current UTC time in the html document 

// const currentUTCTimeElement = document.getElementById('UTCTime');

// currentUTCTimeElement.textContent = getCurrentUTCTime();

// function to get and display the current UTC time
updateUTCTime = () => {
    const utcTimeElement = document.getElementById("UTCTime");
    const currentDate = new Date();
    
    const hours = currentDate.getUTCHours();
    const minutes = currentDate.getUTCMinutes();
    const seconds = currentDate.getUTCSeconds();
  
    const timeString = `${hours}:${minutes}:${seconds}`;
    utcTimeElement.textContent = timeString;
}
  
// Update the UTC time every second (you can adjust the interval as needed)
setInterval(updateUTCTime, 1000);