import {timer} from "./main.js"


export let setTimer = () => {
    let set = prompt(`Quantos minutos vamos nos concentrar?`)
    timer.minutesDisplay.innerText = String(set).padStart(2, '0')
}

export let timerDisplay = () => {
    setTimeout(function(){
        let seconds = Number(timer.secondsDisplay.textContent)
        let minutes = Number(timer.minutesDisplay.textContent)

        if(minutes <= 0 && seconds <= 0 ){
            return
        }

        if(seconds <= 0){
            seconds = 10

            timer.minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
        }

        

        timer.secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')
   
        timerDisplay()
        
    }, 1000)
}


