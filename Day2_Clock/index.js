const secondsHand = document.querySelector(".second")
const minsHand = document.querySelector(".minute")
const hrsHand = document.querySelector(".hour")
const timeInWords = document.querySelector('.time-in-words')
function setDate() {
    const date = new Date();
    const seconds = date.getSeconds()
    const minutes = date.getMinutes()
    const hour = date.getHours()
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    if (seconds === 0) {
        secondsHand.style.transitionDuration = '0s';
        minsHand.style.transitionDuration = '0s';
        hrsHand.style.transitionDuration = '0s';

    }
    else {
        secondsHand.style.transitionDuration = '0.05s';
        minsHand.style.transitionDuration = '0.05s';
        hrsHand.style.transitionDuration = '0.05s';
    }
    const minDegrees = (((minutes / 60) * 360) + 90)
    const hrsDegrees = (((hour / 24) * 360) + 90)
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`
    minsHand.style.transform = `rotate(${minDegrees}deg)`
    hrsHand.style.transform = `rotate(${hrsDegrees}deg)`
    timeInWords.innerHTML = `${hour}:${minutes}:${seconds}`

}
setInterval(setDate, 1000)