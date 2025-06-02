document.getElementById("year").textContent = new Date().getFullYear();

function addEvent(){
    document.getElementById("music").addEventListener("click", play);
}
function play(){
    var audio = document.getElementById("audio");
    audio.play();
}