import * as controls from "./controls.js"
import * as countdown from "./countdown.js"
import * as sounds from "./sounds.js"


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
    sounds.bgSoundPlay()
    
})

buttons.pauseButton.addEventListener('click', function(){
    controls.pause()
    countdown.pauseTimer()
    sounds.bgSoundStop()
})

buttons.watchButton.addEventListener('click', function(){
    controls.watch()
    countdown.setTimer()
})

buttons.stopButton.addEventListener('click', function(){
    controls.stop()
    countdown.stopTimer()
    sounds.bgSoundStop()
})

buttons.soundButton.addEventListener('click', function(){
    controls.sound()
    sounds.bgSoundStop()
})

buttons.muteButton.addEventListener('click', function(){
    controls.mute()
    sounds.bgSoundPlay()
})

