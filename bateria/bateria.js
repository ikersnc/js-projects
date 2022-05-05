//BOTONES
let btn = document.getElementsByClassName('btn');
//

//AUDIOS
let clap = new Audio('audio/clap.wav');
let hihat = new Audio('audio/hihat.wav');
let kick = new Audio('audio/kick.wav');
let openhat = new Audio('audio/openhat.wav');
let boom = new Audio('audio/boom.wav');
let ride = new Audio('audio/ride.wav');
let snare = new Audio('audio/snare.wav');
let tom = new Audio('audio/tom.wav');
let tink = new Audio('audio/tink.wav');
//

//SONIDOS
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
//

//BORDES
document.body.addEventListener('keydown', function(e) {
    let keyCode = e.key;

    switch(keyCode){
        case 'a': btn[0].style.borderColor = 'white';
                break;
        case 's': btn[1].style.borderColor = 'white';
                break;
        case 'd': btn[2].style.borderColor = 'white';
                break;
        case 'f': btn[3].style.borderColor = 'white';
                break;
        case 'g': btn[4].style.borderColor = 'white';
                break;
        case 'h': btn[5].style.borderColor = 'white';
                break;
        case 'j': btn[6].style.borderColor = 'white';
                break;
        case 'k': btn[7].style.borderColor = 'white';
                break;
        case 'l': btn[8].style.borderColor = 'white';
                break;
        default: break;
    };

});

document.body.addEventListener('keyup', function(e) {
    let keyCode = e.key;

    switch(keyCode){
        case 'a': btn[0].style.borderColor = 'black';
                break;
        case 's': btn[1].style.borderColor = 'black';
                break;
        case 'd': btn[2].style.borderColor = 'black';
                break;
        case 'f': btn[3].style.borderColor = 'black';
                break;
        case 'g': btn[4].style.borderColor = 'black';
                break;
        case 'h': btn[5].style.borderColor = 'black';
                break;
        case 'j': btn[6].style.borderColor = 'black';
                break;
        case 'k': btn[7].style.borderColor = 'black';
                break;
        case 'l': btn[8].style.borderColor = 'black';
                break;
        default: break;
    };

});
//