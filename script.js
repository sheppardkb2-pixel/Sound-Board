// Create an array of sounds
const sounds = ["Applause", "Boo", "Gasp", "Tada", "Victory", "Wrong"];

// For each sound, create a button, add a class 'btn'. update the text, append to DOM
sounds.forEach((sound) => {
    // Create a button 
    const btn = document.createElement('button');

    // Add a class of "btn" to the button element
    btn.classList.add('btn');

   // Set the button label text to be the same as the string value in the sounds array 
    btn.innerText = sound;

    // Add the button to the DOM
    document.getElementById('buttons-container').appendChild(btn);

    //Add an event listener to play the corresponding sound when the button is clicked
    btn.addEventListener("click", () => playSound(sound));
});