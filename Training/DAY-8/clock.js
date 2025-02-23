function getTime(){
    const currentDate = new Date();
    let Hours = currentDate.getHours();
    let Minutes = currentDate.getMinutes();
    const Seconds = currentDate.getSeconds();
    // const Clock = document.getElementById("clock");
    // Clock.innerText = `${Hours} : ${Minutes} : ${Seconds}`;

let amPm;

if (Hours >= 12) {
    amPm = "PM";
} else {
    amPm = "AM";
}
if (Hours > 12) {
    Hours -= 12;
} else if (Hours === 0) {
    Hours = 12;
}

    if (Minutes < 10) {
        Minutes = "0" + Minutes;
    }
    if (Seconds < 10) {
        Seconds = "0" + Seconds;
    }
    const Clock = document.getElementById("clock");
    Clock.innerText = `${Hours} : ${Minutes} : ${Seconds} ${amPm}`;
}

setInterval(getTime,1000);
getTime();
