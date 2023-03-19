const hourEl = document.getElementById('hour')
const minuteEl = document.getElementById('minute')
const secondEl = document.getElementById('second')
const dayEl = document.getElementById('day')



const countDownTime = new Date("January 1, 2024 00:00:00").getTime()

const id = setInterval(() => {

    const currentTime = new Date().getTime()

    const timeVeriation  = countDownTime - currentTime

    dayEl.innerText = Math.floor((timeVeriation / (1000 *60 * 60 * 24)))
    hourEl.innerText = Math.floor((timeVeriation % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    minuteEl.innerText = Math.floor((timeVeriation % (1000 * 60 * 60)) / (1000 * 60)) 
    secondEl.innerText = Math.floor(timeVeriation % (1000 * 60) / (1000))

    if(timeVeriation < 0){
        clearInterval(id)
    }



}, 1000)