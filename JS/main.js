import * as controls from "./controls.js"
import * as countdown from "./countdown.js"

//------------------------DOM----------------------------------//
export const buttons = {

    playButton: document.querySelector(".play-btn"),
    pauseButton:document.querySelector(".pause-btn"),
    stopButton: document.querySelector(".stop-btn"),
    watchButton: document.querySelector(".watch-btn"),
    soundButton: document.querySelector(".sound"),
    muteButton: document.querySelector(".mute"),
}

export const timer = {
    minutesDisplay: document.querySelector('.minutes'),
    secondsDisplay: document.querySelector('.seconds'),
}


//------------------------FUNCTIONS---------------------------//

buttons.playButton.addEventListener('click', function(){
    controls.play()
    countdown.timerDisplay()
    
})

buttons.pauseButton.addEventListener('click', function(){
    controls.pause()
})

buttons.watchButton.addEventListener('click', function(){
    controls.watch()
    countdown.setTimer()
})

buttons.stopButton.addEventListener('click', function(){
    controls.stop()
})

buttons.soundButton.addEventListener('click', function(){
    controls.sound()
})

buttons.muteButton.addEventListener('click', function(){
    controls.mute()
})

