
const hourEl = document.getElementById('hour')
const minuteEl = document.getElementById('minute')
const secondEl = document.getElementById('second')
const dayEl = document.getElementById('day')



const countDownTime = new Date("January 1, 2024 00:00:00").getTime()

const id = setTimeout(() => {

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



const yearEl = document.getElementById('year')
const dayEl = document.getElementById('day')
const hourEl = document.getElementById('hour')
const minuteEl = document.getElementById('minute')
const secondEl = document.getElementById('second')




// create a countDown to date

const countDownDate = new Date("January 1, 2024 00:00:00").getTime();


// create function to update the countdown every second


const intervalId = setInterval(() => {

    // get today's date and time

    const todayDate = new Date().getTime()

    // cal the difference btw today's date and te coming year

    const distance = countDownDate - todayDate
    console.log(distance)

    dayEl.innerText = Math.floor ((distance / (1000 * 60 * 60 * 24)))
    hourEl.innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    minuteEl.innerText = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60))
    secondEl.innerText = Math.floor(distance % (1000 * 60) / (1000))


    if(distance < 0){
        clearInterval(intervalId)
    }
    

}, 1000)