// function add(){
//     const abc=document.createElement('li')
//     //console.log(abc)
//     const task=document.getElementById("input_box")
//     let addvalue=task.value;
//     let linode=document.createTextNode(addvalue)
//     // console.log (addvalue);
//     // console.log(linode);
//     abc.appendChild(linode)
//    console.log(abc)
//    if(addvalue===''){
//     alert('please write something');
//    }
//    else{
//     document.getElementById("unorderlist").appendChild(abc)
//    }
//     task.value=''
//     //  console.log(unorder1)
//     // unorder1.appendChild(abc)

//     var li = document.createElement("li");
//     li.innerHTML = input_box.value + ' <span class="delete" onclick="deleteTask(this)">❌</span>';
//     li.appendChild(li);
//     input_box.value = "";

// }
// function deleteTask(item) {
//     var li = item.parentElement;
//     li.remove();
//   }
function add() {
    var taskInput = document.getElementById("input_box");
    var taskList = document.getElementById("unorderlist");
  
    if (taskInput.value === "") {
      alert("Please enter a task!");
      return;
    }
  
    var li = document.createElement("li");
    li.innerHTML = taskInput.value + ' <span class="delete" onclick="deleteTask(this)">❌</span>';
    taskList.appendChild(li);
    taskInput.value = "";
  }
  
  function deleteTask(item) {
    var li = item.parentElement;
    li.remove();
  }