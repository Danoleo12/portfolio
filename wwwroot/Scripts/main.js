var userName = prompt("What do I call you?");
if(userName == null || userName == ""){
    alert("No name provided");
    alert("Double click on triangle button to play the background music");
} else {
    document.querySelector("h1").textContent = "Hello " + userName + " I am Danick";
    alert("Hi " + userName + "\nDouble click on triangle button to play the background music");
}


document.getElementById("year").textContent = new Date().getFullYear();

function addEvent(){
    document.getElementById("music").addEventListener("click", play);
}
function play(){
    var audio = document.getElementById("audio");
    audio.play();
}