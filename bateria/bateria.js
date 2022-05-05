let clap = new Audio('audio/clap.wav');
let hihat = new Audio('audio/hihat.wav');
let kick = new Audio('audio/kick.wav');
let openhat = new Audio('audio/openhat.wav');
let boom = new Audio('audio/boom.wav');
let ride = new Audio('audio/ride.wav');
let snare = new Audio('audio/snare.wav');
let tom = new Audio('audio/tom.wav');
let tink = new Audio('audio/tink.wav');

document.body.addEventListener('keypress', function(e) {
    let keyCode = e.key;

    switch(keyCode){
        case 'a': console.log(keyCode);
                clap.play();
                break;
        case 's': console.log(keyCode);
                hihat.play();
                break;
        case 'd': console.log(keyCode);
                kick.play();
                break;
        case 'f': console.log(keyCode);
                openhat.play();
                break;
        case 'g': console.log(keyCode);
                boom.play();
                break;
        case 'h': console.log(keyCode);
                ride.play();
                break;
        case 'j': console.log(keyCode);
                snare.play();
                break;
        case 'k': console.log(keyCode);
                tom.play();
                break;
        case 'l': console.log(keyCode);
                tink.play();
                break;
        default: break;
    };

});