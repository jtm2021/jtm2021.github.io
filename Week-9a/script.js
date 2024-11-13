function formulateLyrics() {
    let bottlesOfBeer = 99;
    let lyrics = "";
    for (let i = bottlesOfBeer; i > 0; i--) {
        if (i === 1) {
            lyrics += i + "bottle of beer on the wall, " + i + "bottle of beer\n Take one down and pass it around, no more bottles of beer on the wall\n\n";
        } else {
            lyrics += i + "bottles of beer on the wall, " + i + "bottles of beer\n Take one down and pass it around," + + (i - 1) + (i - 1 === 1 ? "bottle" : "bottles") + "no more bottles of beer on the wall\n\n";
        }
    }

    lyrics += "No more bottles of beer on the wall, no more bottles of beer.\n" +
        "Go to the store and buy some more, 99 bottles of beer on the wall."

    return lyrics;
}

function displayLyrics() {
    let songLyrics =  this.formulateLyrics();
    const lyrics = document.getElementById("lyrics");
    const btn = document.getElementById("showLyrics");
    btn.style.display = "none";
    lyrics.innerText = songLyrics;
}