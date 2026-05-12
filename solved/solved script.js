function playSound() {
    const audio = new Audio("./assets/smash.mp3");
    audio.play();
}

$(window).on("mousemove", function (e) {
    // have the hammer follow the cursor
    // use "e.originalEvent.offsetX" and "e.originalEvent.offsetY" for mouse position
    // using this alone will put the element on the bottom right so u might need to + 100 or - 100

    $(".hammer").css("top", e.originalEvent.y - 150);
    $(".hammer").css("left", e.originalEvent.x);
});

$(window).on("click", function (e) {
    // rotate the hammer and hit the mole
    $(".hammer").css({
        transform: `rotate(-90deg)`,
    });

    // using setTimeout, rotate it back 100ms later
    setTimeout(function () {
        // lift up the hammer
        $(".hammer").css({
            transform: `rotate(0)`,
        });
    }, 100);
});

$(".hole").on("click", function (e) {
    const mole = $(this).find(".mole");
    const moleHit = $(this).find(".mole-hit");

    // Do nothing if no mole or already hit
    if (mole.length === 0 || mole.hasClass("hidden")) return;

    // play the hit sound
    playSound();

    // hide the mole, show the hit mole
    mole.addClass("hidden");
    moleHit.removeClass("hidden");

    // 500ms later hide the hit mole
    setTimeout(function () {
        // hide the mole
        moleHit.addClass("hidden");
    }, 500);
});

// add a function that every second randomly shows a mole from the list of moles
// TODO:
