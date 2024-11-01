
let tasks = [];
let task = {};
let counter = 0;


function addtask() {

    console.log(tasks);

    task = {
        id: counter++,
        taskname: document.getElementById('task_name').value,
        description: document.getElementById('description').value,
        status: document.getElementById('statu').value,
        time: document.getElementById('time').value,
        date: document.getElementById('date').value,
    }
    tasks.push(task);
    displayTasks();
    document.getElementById("form").reset();
    
}

function displayTasks() {
    tablebody = document.querySelector("#tasktable tbody");

    tablebody.innerHTML = "";

    tasks.forEach(task => {
        row = document.createElement("tr");
        
        namecell = document.createElement("td");
        namecell.textContent = task.taskname;
        row.appendChild(namecell);

        descriptioncell = document.createElement("td");
        descriptioncell.textContent = task.description;
        row.appendChild(descriptioncell);

        statuscell = document.createElement("td");
        statuscell.textContent = task.status;
        row.appendChild(statuscell);

        timecell = document.createElement("td");
        timecell.textContent = task.time;
        row.appendChild(timecell);

        datecell = document.createElement("td");
        datecell.textContent = task.date;
        row.appendChild(datecell);



        editcell = document.createElement("td");
        edit = document.createElement("button");
        edit.innerHTML = "edit me";
        edit.classList.add("editbtn");
        edit.setAttribute("onclick", `editTask(${task.id})`);
        editcell.appendChild(edit);
        row.appendChild(editcell);

        deletcell = document.createElement("td");
        delet = document.createElement("button");
        delet.innerHTML = "delete me";
        delet.classList.add("deletbtn");
        delet.setAttribute("onclick", `DeletTask(${task.id})`);
        deletcell.appendChild(delet);
        row.appendChild(deletcell);

        maccell = document.createElement("td");
        mac = document.createElement("button");
        mac.innerHTML = "mark as done";
        mac.classList.add("macbtn");
        mac.setAttribute("onclick", `macTask(${task.id})`);
        maccell.appendChild(mac);
        row.appendChild(maccell);

        tablebody.appendChild(row);

    });
}


function editTask(id) {
    
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id == id) {
            document.getElementById("task_name").value = tasks[i].taskname;
            document.getElementById("description").value = tasks[i].description;
            document.getElementById("statu").value = tasks[i].status;
            document.getElementById("time").value = tasks[i].time;
            document.getElementById("date").value = tasks[i].date;
        }
    }

    let addbt = document.getElementById("sub")
    addbt.innerHTML = "edit";
    addbt.setAttribute("onclick", `addModif(${id})`);


}
 function addModif(id) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id == id) {
        tasks[i].taskname = document.getElementById("task_name").value;
        tasks[i].description = document.getElementById("description").value;
        tasks[i].status = document.getElementById("statu").value;
        tasks[i].time = document.getElementById("time").value;
        tasks[i].date = document.getElementById("date").value;
        }
    }
        displayTasks();
        let addbt = document.getElementById("sub")
        addbt.innerHTML = "add task";
        addbt.setAttribute("onclick", `addtask(${id})`);
        document.getElementById("form").reset();
  }



function DeletTask(id) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id == id) {
    const task1 = tasks.splice(i,1);
        }
}
    displayTasks();

}

function macTask(id){
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id == id) {
    tasks[i].status.innerHTML = "done";
}
}
    displayTasks();
}


function late(){
    const d = new Date();
    let dl = new Date(tasks[i].Date);
    delay = (dl - d )/(1000*60*60*24) ;

    for (let i = 0; i < tasks.length; i++) {
        let dl = new Date(tasks[i].Date);

        if (delay >= 0) {
            task[i].classList.add("mystyle");
        }}
}