const a = document.getElementById('addtaskbutton');

document.addEventListener('DOMContentLoaded', loadTasks);

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => addTaskToDOM(task));
}

function saveTaskToLocalStorage(task) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTaskFromLocalStorage(task) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const updatedTasks = tasks.filter(t => t !== task);
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}

function updateTaskInLocalStorage(oldTask, newTask) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const taskIndex = tasks.indexOf(oldTask);
  if (taskIndex > -1) {
    tasks[taskIndex] = newTask;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}



function addTaskToDOM(value) {

  const newlistitem = document.createElement("li");
  newlistitem.textContent = value;


  const removebutton = document.createElement("button");
  removebutton.textContent = "Remove";
  removebutton.className = 'remove';

  const updatebutton = document.createElement('button');
  updatebutton.textContent = 'Update';
  updatebutton.className = 'update';

  removebutton.addEventListener('click', function () {
    const taskText = newlistitem.firstChild.textContent;
    newlistitem.remove();
    removeTaskFromLocalStorage(taskText);
  });

  updatebutton.addEventListener('click', function () {
    const taskinput1 = document.getElementById('taskinput');
    const taskvalue1 = taskinput1.value.trim();
    const oldTask = newlistitem.firstChild.textContent;

    if (taskvalue1) {
      updateTaskInLocalStorage(oldTask, taskvalue1);

      newlistitem.childNodes[0].nodeValue = taskvalue1;
      /*const newdiv = document.createElement('div');
      newdiv.className = "div_button";
      newdiv.appendChild(removebutton);
      newdiv.appendChild(updatebutton);

      newlistitem.appendChild(newdiv)*/

      taskinput1.value = '';

    }

    else {
      alert("Enter a new task to update.");
    }

  });

  const newdiv = document.createElement('div');
  newdiv.className = "div_button";


  newdiv.appendChild(removebutton);
  newdiv.appendChild(updatebutton);

  newlistitem.appendChild(newdiv)

  const p = document.getElementById("tasklist")
  p.appendChild(newlistitem);

};

a.addEventListener('click', function () {
  const inp = document.getElementById('taskinput');
  const value = inp.value.trim();
  if (value) {
    addTaskToDOM(value); // Add to the DOM
    saveTaskToLocalStorage(value);
    taskinput.value = '';
  }

  else {
    alert("enter a task its empty.")
  }

});




