const a = document.getElementById('addtaskbutton');

a.addEventListener('click', function () {
  const inp = document.getElementById('taskinput');
  const value = inp.value.trim();

  if (value) {
    const newlistitem = document.createElement("li");
    newlistitem.textContent = value;

    const removebutton = document.createElement("button");
    removebutton.textContent = "Remove";
    removebutton.className = 'remove';

    const updatebutton = document.createElement('button');
    updatebutton.textContent = 'Update';
    updatebutton.className = 'update';

    removebutton.addEventListener('click', function () {
      newlistitem.remove();
    });

    updatebutton.addEventListener('click', function () {
      const taskinput1 = document.getElementById('taskinput');
      const taskvalue1 = taskinput1.value.trim();
      newlistitem.textContent = taskvalue1;
      newlistitem.appendChild(removebutton);
      newlistitem.appendChild(updatebutton);

      taskinput1.value = '';

    });

    const newdiv = document.createElement('div');
    newdiv.className = "div_button";


    newdiv.appendChild(removebutton);
    newdiv.appendChild(updatebutton);

    newlistitem.appendChild(newdiv)

    const p = document.getElementById("tasklist")
    p.appendChild(newlistitem);
    taskinput.value = '';



  }
  else {
    alert("enter a task its empty.")
  }





});