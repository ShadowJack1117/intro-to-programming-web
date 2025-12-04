let kick = document.getElementById("Kick")
kick.addEventListener('click', Kick);

function Kick() {
    let kick = new Audio("Drums_For_JavaPlayer/Kick.wav")
    kick.play();
}

let hihat = document.getElementById("hihat")
hihat.addEventListener('click', HiHat);

function HiHat() {
    let hihat = new Audio("Drums_For_JavaPlayer/hihat.wav")
    hihat.play();
}

let snare = document.getElementById("Snare")
snare.addEventListener('click', Snare);

function Snare() {
    let snare = new Audio("Drums_For_JavaPlayer/Snare.wav")
    snare.play();
}

let tom = document.getElementById("Tom")
tom.addEventListener('click', Tom);

function Tom() {
    let tom = new Audio("Drums_For_JavaPlayer/Tom.wav")
    tom.play();
}

let gSharp = document.getElementById("Gsharp")
gSharp.addEventListener('click', Gsharp);

function Gsharp() {
    let gSharp = new Audio("Drums_For_JavaPlayer/Gsharp.wav")
    gSharp.play();
}
