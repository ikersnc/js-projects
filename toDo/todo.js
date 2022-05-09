let enterTask = document.getElementById('enterTask');
let cont = 0;

let newTask = function() {
    //ELEMENTOS
    let container = document.createElement('div');
    let tarea = document.createElement('input');
    let texto = document.createElement('label');
    //PROPIEDADES
    container.classList.add('tareas');
    container.appendChild(tarea);
    container.appendChild(texto);

    tarea.type = 'checkbox';
    tarea.id = 'tarea' + cont;

    texto.htmlFor = tarea.id;
    texto.innerText = enterTask.value;
    //CONT PARA PROX. ID Y REINICIAR INPUT TAREA
    cont++;
    enterTask.value = '';
    console.log(container);
};

addTask.addEventListener('click', newTask);