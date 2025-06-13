var userName = prompt("What do I call you?");
if(userName == null || userName == ""){
    alert("No name provided");
} else {
    document.querySelector("h1").textContent = "Hello " + userName + " I am Danick";
}

alert("Double click on triangle button to play music");
document.getElementById("year").textContent = new Date().getFullYear();

function addEvent(){
    document.getElementById("music").addEventListener("click", play);
}
function play(){
    var audio = document.getElementById("audio");
    audio.play();
}