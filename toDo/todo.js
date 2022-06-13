let main = document.querySelector('main');
let tasks = document.getElementsByClassName('tareas');
let cont = 0;

function add() {
    
    if(enterTask.value === '')
        error.innerText = 'Enter task';
    else {
        error.innerText = '';
        let deleteTask = [];
        if(!noTasks.classList.contains('hidden')) noTasks.classList.add('hidden');
        //ELEMENTS
        let container = document.createElement('div');
        let tarea = document.createElement('input');
        let texto = document.createElement('label');
        
        //PROPERTIES
        container.classList.add('tareas');
        container.appendChild(tarea);
        container.appendChild(texto);
        container.appendChild(deleteBtn());

        tarea.type = 'checkbox';
        tarea.id = 'tarea' + cont;

        texto.htmlFor = tarea.id;
        texto.innerText = enterTask.value;
        
        //CONT FOR PROX. ID & REBOOT INPUT
        cont++;
        enterTask.value = '';
        main.insertBefore(container, tasks[0]);
    }
};

function deleteBtn() {
    //CREATE BUTTON
    let icon = document.createElement('li');
    icon.id = 'icon' + cont;
    icon.classList.add('fa-solid', 'fa-trash');

    //WAITS FOR THE CLICK AND DELETES THE TASK
    icon.addEventListener('click', e => {
        let toDelete = e.target.parentElement;
        main.removeChild(toDelete);
    });

    return icon;
};
//ADD CLICKING BUTTON
addTask.addEventListener('click', add);
//ADD PRESSING ENTER
enterTask.addEventListener('keyup', e => {if(e.key === 'Enter') add();});