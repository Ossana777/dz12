
const MAX = 400
function initiate() {
    media = document.getElementById('media')
    buttons = document.getElementById('buttons')
    play = document.getElementById('play')
    mute = document.getElementById('mute')
    bar = document.getElementById('bar')
    progress = document.getElementById('progress')
    control = document.getElementById('control')
    volume = document.getElementById('volume')

    play.addEventListener('click',push)
    media.addEventListener('click',push)
    mute.addEventListener('click',sound)
    bar.addEventListener('click',move)
    volume.addEventListener('change',level)

}
function level () {
media.volume = volume.value;
}

function move(e){
let mouseX = e.pageX - bar.offsetLeft;
let newTime = mouseX * media.duration / MAX;
media.currentTime = newTime;
progress.style.width = `${mouseX}px`
}


function sound(){
    if (media.muted) {mute.innerHTML = "Звук";
    mute.setAttribute('class','muteOn')
}
    else {mute.innerHTML = "Вкл.";
    mute.setAttribute('class','muteOff')
}
media.muted = !media.muted
}


    function push () {
        if (!media.paused && !media.ended){
    media.pause();;
    icon2.style.animation =`icons 1s`
    icon1.style.animation = ``
        play.innerHTML = "Пуск"
    clearInterval(loop)}
        else {
        media.play();icon2.style.animation = ``;
        icon1.style.animation =`icons 1s`
        play.innerHTML = "Пауза";
      loop =  setInterval(myStatus,1000)
}
    }

function myStatus(){
if(!media.ended) {
    let size = media.currentTime * MAX / media.duration;
    progress.style.width = `${size}px`
}
else {
    progress.style.width = "0";
    play.innerHTML = "Пуск";
    clearInterval(loop)

}
}

addEventListener("load", initiate)