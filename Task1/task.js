function formatTime(number) {
    if (number < 10) {
        return `0${number}`
    }
    return number
}

const time = document.getElementById("timer");

setTimeout(() => {
    clearInterval(timer);
    alert('Вы победили в конкурсе!');
}, (Number(time.textContent) + 1) * 1000)

let timer = setInterval(() => {
    time.textContent = Number(time.textContent) - 1
}, 1000)


//Task1*

// let hours = Number(time.textContent.slice(0, 2))
// let minutes = Number(time.textContent.slice(3, 5))
// let seconds = Number(time.textContent.slice(6, ))

// allTimes = hours*3600 + minutes*60 + seconds;

// setTimeout(() => {
//     clearInterval(timer);
//     alert('Вы победили в конкурсе!');
// }, (allTimes + 1) * 50)

// let timer = setInterval(() => {
//     if (seconds > 0) {
//         seconds--;
//     } else if (seconds == 0 && minutes > 0) {
//         minutes--;
//         seconds = 59;
//     } else if (seconds == 0 && minutes == 0) {
//         hours--;
//         minutes = 59;
//         seconds = 59;
//     }
//     time.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
// }, 50)