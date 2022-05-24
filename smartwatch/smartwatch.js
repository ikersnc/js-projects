setInterval(() => {
    let time = new Date();
    let localTime = time.toLocaleTimeString();
    displayTime.innerText = localTime;
}, 1000);

blue.addEventListener('click', () => displayWatch.style.backgroundImage = "url('img/blue.png')");
red.addEventListener('click', () => displayWatch.style.backgroundImage = "url('img/red.png')");
black.addEventListener('click', () => displayWatch.style.backgroundImage = "url('img/black.png')");
purple.addEventListener('click', () => displayWatch.style.backgroundImage = "url('img/purple.png')");
pink.addEventListener('click', () => displayWatch.style.backgroundImage = "url('img/pink.png')");
