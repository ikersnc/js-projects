setInterval(() => {
    let time = new Date();
    let localTime = time.toLocaleTimeString();
    displayTime.innerText = localTime;
}, 1000);

blue.addEventListener('click', () => img.src = 'img/blue.png');
red.addEventListener('click', () => img.src = 'img/red.png');
black.addEventListener('click', () => img.src = 'img/black.png');
purple.addEventListener('click', () => img.src = 'img/purple.png');
pink.addEventListener('click', () => img.src = 'img/pink.png');
