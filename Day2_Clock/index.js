const secondsHand = document.querySelector(".second")
const minsHand = document.querySelector(".minute")
const hrsHand = document.querySelector(".hour")
const timeInWords = document.querySelector('.time-in-words')
function setDate() {
    const date = new Date();

    const seconds = date.getSeconds()
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`

    const minutes = date.getMinutes()
    /**
     * We multiply seconds/60 here with 6 because every 6 degrees represents 1 minute in a clock
     */
    const minsDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`
    const hour = date.getHours()
    /**
     * We multiply minutes/60 here with 30 because every 30 degrees represents 1 hour in a clock
     */
    const hourDegrees = ((hour / 12) * 360) + ((minutes / 60) * 30) + 90;
    hrsHand.style.transform = `rotate(${hourDegrees}deg)`

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

    timeInWords.innerHTML = `${hour}:${minutes}:${seconds}`

}
setInterval(setDate, 1000);
setDate();