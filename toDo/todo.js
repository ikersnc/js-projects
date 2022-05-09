let addTask = document.getElementById('addTask');

let newTask = function() {

    let container = document.createElement('div');
    let tarea = document.createElement('input');

    container.classList.add('tareas');
    tarea.type = 'checkbox';
    container.appendChild(tarea);
    
    console.log(container);
};

addTask.addEventListener('click', newTask);