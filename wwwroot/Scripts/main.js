document.getElementById("year").textContent = new Date().getFullYear();

async function toggleCard(card) {
    const video = card.querySelector("video");
    const willFlipOpen = !card.classList.contains("flipped");

    card.classList.toggle("flipped");

    if (!video) {
        return;
    }

    if (willFlipOpen) {
        try {
            await video.play();

            if (document.pictureInPictureEnabled && typeof video.requestPictureInPicture === "function") {
                await video.requestPictureInPicture();
            }
        } catch (error) {
            console.error("PiP failed:", error);
        }

        return;
    }

    if (document.pictureInPictureElement === video) {
        try {
            await document.exitPictureInPicture();
        } catch (error) {
            console.error("Unable to exit PiP:", error);
        }
    }
}

document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
        toggleCard(card);
    });

    card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleCard(card);
        }
    });
});
