function newElement() {
    let taskValue = document.querySelector("#task").value;
    if(taskValue.trim() === ''){
        $("#liveToastError").toast('show');
    } else {
        let liDOM = document.createElement('li');
        liDOM.innerHTML = taskValue;

        let closeDOM = document.createElement('span');
        closeDOM.innerHTML = '×'
        closeDOM.classList.add('close');
        closeDOM.onclick = function(){
            removeLi(this);
        };

        liDOM.appendChild(closeDOM);
        let listDOM = document.querySelector('#list');
        listDOM.appendChild(liDOM);
        $("#liveToastSuccess").toast('show');
        addTaskToLocalStorage(taskValue);
    }
}

function addTaskToLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
} 

function removeLi(clickedButton) {
    clickedButton.parentElement.style.display = "none";
}

document.addEventListener('DOMContentLoaded', function(){
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
    tasks.forEach(function(task){
        let liDOM = document.createElement('li');
        liDOM.innerHTML = task;

        let closeDOM = document.createElement('span');
        closeDOM.innerHTML = '×';
        closeDOM.classList.add('close');
        closeDOM.onclick = function () {
            removeLi(this);
        };

        liDOM.appendChild(closeDOM);
        document.querySelector('#list').appendChild(liDOM);
    });

    document.querySelector('#list').addEventListener('click', function(event) {
        if(event.target.tagName === 'LI' && !event.target.classList.contains('close')) {
            event.target.classList.toggle('checked')
        }
    });
});