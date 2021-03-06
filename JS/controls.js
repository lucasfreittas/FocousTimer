import {buttons} from "./main.js"


//--------------------------CONFIG BUTTONS ACTIONS---------------------

export let play = () => {
    buttons.playButton.classList.add('hide')
    buttons.pauseButton.classList.remove('hide')
    buttons.watchButton.classList.add('hide');
    buttons.stopButton.classList.remove('hide');
    buttons.muteButton.classList.add('hide');
    buttons.soundButton.classList.remove('hide');
}
    

export let pause = () => {
    buttons.pauseButton.classList.add('hide');
    buttons.playButton.classList.remove('hide');
    buttons.soundButton.classList.add('hide');
    buttons.muteButton.classList.remove('hide');
}

export let watch = () => {
    buttons.watchButton.classList.add('hide');
    buttons.stopButton.classList.remove('hide');
}

export let stop = () => {
    buttons.stopButton.classList.add('hide');
    buttons.watchButton.classList.remove('hide');
    buttons.pauseButton.classList.add('hide');
    buttons.playButton.classList.remove('hide');
    buttons.soundButton.classList.add('hide');
    buttons.muteButton.classList.remove('hide');
}

export let sound = () => {
    buttons.soundButton.classList.add('hide');
    buttons.muteButton.classList.remove('hide');
}

export let mute = () => {
    buttons.muteButton.classList.add('hide');
    buttons.soundButton.classList.remove('hide');
}