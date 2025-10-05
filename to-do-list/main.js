const addTasked = document.getElementById('taskinput');
const addClick = document.getElementById('addclick');
  const TaskList = document.getElementById('taskList');


addClick.addEventListener('click', () => {
 
  const addTaskedInput = addTasked.value.trim();

    if(addTaskedInput !== ''){
     const li = document.createElement('li');   
     li.innerHTML = '<input type="checkbox">  ' + addTaskedInput + '  <button onclick="deleteTask(this)">Delete</button> ';

      TaskList.appendChild(li);
    


      addTasked.value ='';
    }else{
        alert('Please Enter The Value');
    }
 
});


const deleteTask = (btn) =>{

 const li = btn.parentNode;
  li.remove();
}

const deleteCheaked = () => {   
    
  const Checkedboxs = document.querySelectorAll('input[type="checkbox"]:checked');

  Checkedboxs.forEach(checkbox => {
    checkbox.parentNode.remove();
  });

}