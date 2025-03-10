function openBox() {
    document.querySelector(".hidden-content").style.display = "block";
    document.querySelector(".mystery-box").style.display = "none";

    // Play the audio only if it exists
    let audio = document.getElementById("loveAudio");
    if (audio) {
        audio.play();
    }
}
