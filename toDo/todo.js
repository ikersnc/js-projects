let main = document.getElementsByTagName('main');
let tasks = document.getElementsByClassName('tareas');
let deleteTask = [];
let cont = 0;

function add() {
    
    if(enterTask.value === '')
        error.innerText = 'Enter task';
    else {
        error.innerText = '';

        if(!noTasks.classList.contains('hidden')) noTasks.classList.add('hidden');
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

        icon.id = 'icon' + cont;
        icon.classList.add('fa-solid', 'fa-trash');
        deleteTask.push(icon.id);
        console.log(deleteTask);
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
//NOT WORKING
for(let i = 0; i < deleteTask.length; i++) {
    deleteTask[i].addEventListener('click', function() {
        console.log('funciona');
    });
}