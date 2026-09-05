const sounds = ["Applause", "Boo", "Gasp", "Tada", "Victory", "Wrong"];
const soundFiles = {
    Applause: "applause.mp3",
    Boo: "boo (1).mp3",
    Gasp: "gasp (1).mp3",
    Tada: "tada (1).mp3",
    Victory: "victory (1).mp3",
    Wrong: "wrong (1).mp3",
};
const audioTracks = [];

sounds.forEach((sound) => {
    const button = document.createElement("button");
    const audio = new Audio(`Sounds/${soundFiles[sound]}`);
    audioTracks.push(audio);

    button.classList.add("btn");

    button.innerText = sound;

    // Add Event Listener for button click 
    button.addEventListener("click", () => {
        audioTracks.forEach((track) => {
            track.pause();
            track.currentTime = 0;
        });
        audio.play();
    });

    document.getElementById("buttons-container").appendChild(button);
});

