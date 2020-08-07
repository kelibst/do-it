import {handleForm, addTask,addTodo, allContainer,todoContainer, taskContainer, taskForm, addTodobtn} from './dom'
import {Task, Todo, renderContent} from './tasks'


let today = Task("Today");
let alltask =[today];
let todoNode = renderContent().todoTk;
let taskId = 0;

//add initial todos
let defaultTask = alltask[0];
defaultTask.todos.push(Todo("Buy milk", 'early in the morning', '11/02/1991','Low Priority'))

//load task and todos when the page loads 

addTodobtn.addEventListener('click', (e) => {
  

  // let's change the default task to the one the user selected.
  taskId = e.target.offsetParent.id;
  defaultTask = alltask[taskId];

  todoNode = e.target.offsetParent.childNodes[3];
  console.log(e.target.offsetParent.childNodes[3])
  
  if(e.target.classList.contains('addTodobtn')){
    handleForm().showForm(todoContainer)
  }
});


//rewrite to pour out all todos on the sscreen
document.addEventListener('DOMContentLoaded', () => {
  alltask.forEach(function(value,index){
    renderContent().render(renderContent().allTk, value, index);

    value.todos.forEach(function(value, index){
  
      renderContent().render(renderContent().todoTk, value, index)
    })
  });

 

});



// hide all forms when the container is clicked
allContainer.addEventListener('click', e => {

 if(e.target.classList.contains('close-w')){
  handleForm().closeForm();
 }
});

addTask.addEventListener('click', () => {
  handleForm().showForm(taskContainer)
})

//set default task


taskForm.taskBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let title = taskForm.tasktitle.value;
  let newTask = new Task(title)
  alltask.push(newTask);

  let latestTask = [] 
  latestTask.push(alltask.find((value) => {
    return value == newTask;
  }))

  latestTask.forEach(function(value,index){
   
    renderContent().render(renderContent().allTk, value, index)
  })

})




//add task when the button is clicked
addTodo.todoBtn.addEventListener('click', (e)=> {
  e.preventDefault();
  let name= addTodo.todotitle.value;
  let description = addTodo.tododesc.value;
  let dateofbirth = addTodo.dateofbirth.value;
  let priority =  addTodo.priority.value;
  let note = addTodo.note.value;


  let setTodo = Todo(name, description, dateofbirth, priority, note);
  defaultTask.todos.push(setTodo)
  console.log(defaultTask)
  let latestTodo = [] 
  latestTodo.push(defaultTask.todos.find((value) => {
    return value == setTodo;
  }))

  latestTodo.forEach(function(value, index){
  
    renderContent().render(todoNode, value, index)
  })
  
})