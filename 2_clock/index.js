let secondHand = document.getElementsByClassName("second")[0];
let minuteHand = document.getElementsByClassName("minute")[0];
let hourHand = document.getElementsByClassName("hour")[0];
function setSeconds() {
    let now = new Date();
    let seconds = now.getSeconds();
    let secondsDegrees = seconds / 60 * 360 + 91;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    let minutes = now.getMinutes();
    let minutesDegrees = minutes / 60 * 360 + 91;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    let hours = now.getHours();
    let hoursDegrees = hours / 12 * 360 + 91;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setSeconds, 1000);
