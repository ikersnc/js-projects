//DELETE ELEMENTS

// let toDeleteClass = document.getElementsByClassName('toDeleteClass');

// btn.addEventListener('click', () => toDeleteClass[0].remove());
// btn.addEventListener('click', () => btn.remove());

//DISPLAY HOUR

setInterval(() => {
    let time = new Date();
    let localTime = time.toLocaleTimeString();
    displayTime.innerText = localTime;
}, 1000);