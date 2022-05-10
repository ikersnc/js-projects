let deleteTask = document.getElementById('icon0');
let tarea = document.getElementsByClassName('tareas');

deleteTask.addEventListener('click', function() {
    console.log('funciona');
    for (let i = -1; tarea.length; i++) {
        console.log('esto no funciona');
        if(tarea[i].contains(deleteTask)) tarea[i].remove();
    }
});