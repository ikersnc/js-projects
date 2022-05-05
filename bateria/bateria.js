//BOTONES
let btn = document.querySelectorAll('.btn');
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
        case 'a':
                console.log(keyCode);
                clap.play();
                break;
        case 's':
                console.log(keyCode);
                hihat.play();
                break;
        case 'd':
                console.log(keyCode);
                kick.play();
                break;
        case 'f':
                console.log(keyCode);
                openhat.play();
                break;
        case 'g':
                console.log(keyCode);
                boom.play();
                break;
        case 'h':
                console.log(keyCode);
                ride.play();
                break;
        case 'j':
                console.log(keyCode);
                snare.play();
                break;
        case 'k':
                console.log(keyCode);
                tom.play();
                break;
        case 'l':
                console.log(keyCode);
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
        case 'a':
                btn[0].style.transition = 'all 200ms ease-out';
                btn[0].style.boxShadow = '0 0 0 5px lightblue';
                btn[0].style.transform = 'scale(110%, 110%)';
                break;
        case 's':
                btn[1].style.transition = 'all 200ms ease-out';
                btn[1].style.boxShadow = '0 0 0 5px lightblue';
                btn[1].style.transform = 'scale(110%, 110%)';
                break;
        case 'd':
                btn[2].style.transition = 'all 200ms ease-out';
                btn[2].style.boxShadow = '0 0 0 5px lightblue';
                btn[2].style.transform = 'scale(110%, 110%)';
                break;
        case 'f':
                btn[3].style.transition = 'all 200ms ease-out';
                btn[3].style.boxShadow = '0 0 0 5px lightblue';
                btn[3].style.transform = 'scale(110%, 110%)';
                break;
        case 'g':
                btn[4].style.transition = 'all 200ms ease-out';
                btn[4].style.boxShadow = '0 0 0 5px lightblue';
                btn[4].style.transform = 'scale(110%, 110%)';
                break;
        case 'h':
                btn[5].style.transition = 'all 200ms ease-out';
                btn[5].style.boxShadow = '0 0 0 5px lightblue';
                btn[5].style.transform = 'scale(110%, 110%)';
                break;
        case 'j':
                btn[6].style.transition = 'all 200ms ease-out';
                btn[6].style.boxShadow = '0 0 0 5px lightblue';
                btn[6].style.transform = 'scale(110%, 110%)';
                break;
        case 'k':
                btn[7].style.transition = 'all 200ms ease-out';
                btn[7].style.boxShadow = '0 0 0 5px lightblue';
                btn[7].style.transform = 'scale(110%, 110%)';
                break;
        case 'l':
                btn[8].style.transition = 'all 200ms ease-out';
                btn[8].style.boxShadow = '0 0 0 5px lightblue';
                btn[8].style.transform = 'scale(110%, 110%)';
                break;
        default: break;
    };

});

document.body.addEventListener('keyup', function(e) {
    let keyCode = e.key;

    switch(keyCode){
        case 'a':
                btn[0].style.boxShadow = '0 0 0 0';
                btn[0].style.transform = 'scale(100%, 100%)';
                break;
        case 's':
                btn[1].style.boxShadow = '0 0 0 0';
                btn[1].style.transform = 'scale(100%, 100%)';
                break;
        case 'd':
                btn[2].style.boxShadow = '0 0 0 0';
                btn[2].style.transform = 'scale(100%, 100%)';
                break;
        case 'f':
                btn[3].style.boxShadow = '0 0 0 0';
                btn[3].style.transform = 'scale(100%, 100%)';
                break;
        case 'g':
                btn[4].style.boxShadow = '0 0 0 0';
                btn[4].style.transform = 'scale(100%, 100%)';
                break;
        case 'h':
                btn[5].style.boxShadow = '0 0 0 0';
                btn[5].style.transform = 'scale(100%, 100%)';
                break;
        case 'j':
                btn[6].style.boxShadow = '0 0 0 0';
                btn[6].style.transform = 'scale(100%, 100%)';
                break;
        case 'k':
                btn[7].style.boxShadow = '0 0 0 0';
                btn[7].style.transform = 'scale(100%, 100%)';
                break;
        case 'l':
                btn[8].style.boxShadow = '0 0 0 0';
                btn[8].style.transform = 'scale(100%, 100%)';
                break;
        default: break;
    };

});
//