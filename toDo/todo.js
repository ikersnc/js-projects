let enterTask = document.getElementById('enterTask');
let cont = 0;

let newTask = function() {
    //ELEMENTOS
    let container = document.createElement('div');
    let tarea = document.createElement('input');
    let texto = document.createElement('label');
    //PROPIEDADES
    container.classList.add('tareas');
    tarea.type = 'checkbox';
    tarea.id = 'tarea' + cont;
    texto.htmlFor = tarea.id;
    texto.innerText = enterTask.value;
    container.appendChild(tarea);
    container.appendChild(texto);
    cont++;
    console.log(container);
};

addTask.addEventListener('click', newTask);