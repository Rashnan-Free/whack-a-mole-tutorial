function playSound() {
    const audio = new Audio("./assets/smash.mp3");
    audio.play();
}

$(window).on("mousemove", function (e) {
    // have the hammer follow the cursor
    // use "e.originalEvent.offsetX" and "e.originalEvent.offsetY" for mouse position
    // using this alone will put the element on the bottom right so u might need to + 100 or - 100
});

$(window).on("click", function (e) {
    // rotate the hammer and hit the mole
    // using setTimeout, rotate it back 100ms later
});

$(".hole").on("click", function (e) {
    const mole = $(this).find(".mole");
    const moleHit = $(this).find(".mole-hit");

    // Do nothing if no mole or already hit

    // play the hit sound

    // hide the mole, show the hit mole

    // 500ms later hide the hit mole
});

// add a function that every second randomly shows a mole from the list of moles
