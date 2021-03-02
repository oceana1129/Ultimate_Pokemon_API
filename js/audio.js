document.querySelector('#audio').addEventListener('click', playAudio)
let song = new Audio;
let muted = false;
let vol = 1;
let click = 0
song.type = 'audio/mpeg';
song.src = 'assets/Pokemon_Route_209.mp3';//Audio file source url
function playAudio(){
    click++
    if(click % 2 === 0){
        document.querySelector('#audio').src = "assets/Pixel_Audio_Empty.png"
        song.pause();
    }else{
        document.querySelector('#audio').src = "assets/Pixel_Audio_Full.png"
        song.play();
    }
}
