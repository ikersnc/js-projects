let main = document.getElementsByTagName('main');
let tasks = document.getElementsByClassName('tareas');
let noTasks = document.getElementById('noTasks');
let cont = 0;

function add() {
    
    if(enterTask.value === '')
        error.innerText = 'Enter task';
    else {
        error.innerText = '';
        noTasks.classList.toggle('hidden');
        //ELEMENTS
        let container = document.createElement('div');
        let tarea = document.createElement('input');
        let texto = document.createElement('label');
        let icon = document.createElement('li');
        //PROPERTIES
        container.classList.add('tareas');
        container.appendChild(tarea);
        container.appendChild(texto);
        container.appendChild(icon);

        tarea.type = 'checkbox';
        tarea.id = 'tarea' + cont;

        texto.htmlFor = tarea.id;
        texto.innerText = enterTask.value;

        icon.classList.add('fa-solid', 'fa-trash');
        //CONT FOR PROX. ID & REBOOT INPUT
        cont++;
        enterTask.value = '';
        main[0].insertBefore(container, tasks[0]);
    }
};
//ADD CLICKING BUTTON
addTask.addEventListener('click', add);
//ADD PRESSING ENTER
enterTask.addEventListener('keyup', function(e) {
    if(e.key === 'Enter') add();
});