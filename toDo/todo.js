let main = document.getElementsByTagName('main');
let tasks = document.getElementsByClassName('tareas');
let cont = 0;

addTask.addEventListener('click', function() {
    
    if(enterTask.value === '')
        error.innerText = 'Introduce una tarea';
    else {
        error.innerText = '';
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
        main[0].insertBefore(container, tasks[0]);
    }
});