//This Web Application was developed by Farheen Pahelvan.
//For JavaScript Group Project.

window.onload = function() {
    showtask();
    var add_task = document.getElementById("add_task");
    var add_button = document.getElementById("add_button");
    // On click of Add Task button, take the value from text box and save in localstorage
    add_button.addEventListener("click" , function(){
    addtaskval = add_task.value;
        // Validate if text box has value or not
        if(addtaskval.trim() != 0){
            var webtask = localStorage.getItem("localtask");
            if(webtask == null){
                taskObj = [];
            }
            else{
                taskObj = JSON.parse(webtask);
            }
        taskObj.push(addtaskval);
        localStorage.setItem("localtask", JSON.stringify(taskObj));
        }
        // Clear the value of text area
        add_task.value="";
        // Call the function to display the table content
        showtask();
    });
    
    // On click of Save Task button, take the updated value from text box and save at same index in localstorage
    var save_button = document.getElementById("save_button");
    save_button.addEventListener("click" , function(){
        var add_button = document.getElementById("add_button");
        var webtask = localStorage.getItem("localtask");
        var taskObj = JSON.parse(webtask); 
        // Store the value of index in variable saveindex
        var saveindex = document.getElementById("save_index").value;
        taskObj[saveindex] = add_task.value;
        // Display Add Task button in place of Save Task button
        save_button.style.display="none";
        add_button.style.display="inline-block";
        localStorage.setItem("localtask", JSON.stringify(taskObj));
        add_task.value="";
        showtask();  
    });
    
    // On click of Delete All button, delete the values from localstorage
    var delete_button = document.getElementById("delete_all_button");
    delete_button.addEventListener("click" , function(){
        var webtask = localStorage.getItem("localtask");
        var taskObj = JSON.parse(webtask);                 
        if(webtask == null){
            taskObj = [];
        }
        else{
            taskObj = JSON.parse(webtask);
            taskObj = [];
        }   
        localStorage.setItem("localtask", JSON.stringify(taskObj));
        showtask();
    });     
}

// This function displays the localstorage values in the table with respective Edit and Delete button
function showtask(){
    var webtask = localStorage.getItem("localtask");
    if(webtask == null){
        taskObj = [];
    }
    else{
        taskObj = JSON.parse(webtask);
    }
    var html = "";
    var addtasklist = document.getElementById("add_task_list");
    taskObj.forEach((item, index) => {        
            html += `<tr>
            <th scope="row">${index+1}</th>
            <td>${item}</td>
            <td id=rowbtn><button id=edit_button type="button" onclick="edittask(${index})">Edit</button></td>
            <td id=rowbtn><button id=dlt_button type="button" onclick="deletetask(${index})">Delete</button></td>
        </tr>`;
    });
    addtasklist.innerHTML = html;
}

// On click of Edit Task button, take the value from table and display in textbox
function edittask(index){
    var saveindex = document.getElementById("save_index");
    var add_button = document.getElementById("add_button");
    var save_button = document.getElementById("save_button");
    saveindex.value = index;
    var webtask = localStorage.getItem("localtask");
    var taskObj = JSON.parse(webtask);
    add_task.value = taskObj[index];
    // Display Save Task button in place of Add Task button
    add_button.style.display="none";
    save_button.style.display="inline-block";
}

// On click of Delete button, delete the particular value from localstorage
function deletetask(index){
    var webtask = localStorage.getItem("localtask");
    var taskObj = JSON.parse(webtask); 
    taskObj.splice(index,1);
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showtask();
}