export const buttonAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
export const clockAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
export const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")


export let bgSoundPlay = () => {
    bgAudio.play()
}

export let bgSoundStop = () => {
    bgAudio.stop()
}

export let clockSound = () => {

}

export let buttonSound = () => {

}