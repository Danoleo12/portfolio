var userName = prompt("What do I call you?");

document.querySelector("h1").textContent = "Hello " + userName + ", I am Danick";


document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', async () => {
        card.classList.toggle('flipped');

        const video = card.querySelector('video');

        if (card.classList.contains('flipped') && video) {
            try {
                await video.play(); // must be playing before PiP
                await video.requestPictureInPicture();
            } catch (err) {
            console.error("PiP failed:", err);
            } 
        }

        if (!card.classList.contains('flipped') && document.pictureInPictureElement === video) {
            await document.exitPictureInPicture();
        }
    });
});