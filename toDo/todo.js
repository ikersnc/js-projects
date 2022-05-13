let main = document.getElementsByTagName('main');
let tasks = document.getElementsByClassName('tareas');
let taskArray = [];
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
        taskArray.push(icon.id);
        console.log(taskArray);
        //CONT FOR PROX. ID & REBOOT INPUT
        cont++;
        enterTask.value = '';
        main[0].insertBefore(container, tasks[0]);
    }
};
//ADD CLICKING BUTTON
addTask.addEventListener('click', add);
//ADD PRESSING ENTER
enterTask.addEventListener('keyup', e => {if(e.key === 'Enter') add();});

// let deleteTask = setInterval(function() {
//     if(taskArray.length > 0) {
//         console.log(taskArray);
//         // for (let i = 0; i < taskArray.length; i++) {
//         //     taskArray[i].addEventListener('click', function() {
//         //         taskArray[i].remove();
//         //     });
//         // }
//         clearInterval(deleteTask);
//     }
// }, 500);
