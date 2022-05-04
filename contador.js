let contador = document.getElementById('contador');
let fondo = document.getElementById('fondo');
let descenso = contador.innerHTML;

let intervalo = setInterval(function() {

    descenso = descenso > 0 ? descenso - 1 : 0;
    
    contador.innerHTML = descenso;
    contador.style.fontSize = descenso * 100 + 'px';

    fondo.style.width = descenso * 10 + '%';
    
    //DETENER INTERVALO AL LLEGAR A 0
    if(descenso <= 0) clearInterval(intervalo);
}, 1000);