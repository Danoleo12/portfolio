document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById('audio').play();

function addEvent(){
    document.getElementById("music").addEventListener("click", play);
}
function play(){
    var audio = document.getElementById("audio");
    audio.play();
}