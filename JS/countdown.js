import {timer} from "./main.js"

let time; // We have to set timer so after we can pause/stop 
let setTime // This set time load the usuer input timer

export let setTimer = () => {
    setTime = prompt(`Quantos minutos vamos nos concentrar?`) || 0
    timer.minutesDisplay.innerText = String(setTime).padStart(2, '0')
}

export let timerDisplay = () => {
    time = setTimeout(function(){
        let seconds = Number(timer.secondsDisplay.textContent)
        let minutes = Number(timer.minutesDisplay.textContent)

        if(minutes <= 0 && seconds <= 0 ){
            return
        }

        if(seconds <= 0){
            seconds = 60

            timer.minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
        }

        

        timer.secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')
   
        timerDisplay()
        
    }, 1000)
}


export let pauseTimer = () => {
    clearTimeout(time)
}

export let stopTimer = () => {
    timer.minutesDisplay.innerText = String(setTime).padStart(2, '0')
    timer.secondsDisplay.innerText = String("00")
    clearTimeout(time)
}