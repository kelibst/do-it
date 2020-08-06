import {handleForm, addTask,addTodo, allContainer,todoContainer, taskContainer, taskForm, addTodobtn} from './dom'
import {Task, Todo, renderContent, taskTemplate, todoTemplate} from './tasks'

addTodobtn.addEventListener('click', (e) => {
  handleForm().showForm(todoContainer)
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

let today = Task("Today");
let alltask =[today];
taskForm.taskBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let title = taskForm.tasktitle.value;
  let newTask = new Task(title)
  alltask.push(newTask)
  alltask.forEach(function(index,value){
  
    renderContent().render(taskTemplate, renderContent().allTk)
  })
  console.log(alltask[0])
})


//add initial todos
let defaultTask = alltask[0];
defaultTask.todos.push(Todo("Buy milk", 'early in the morning', '11/02/1991','2'))

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
  defaultTask.todos.forEach(function(index,value){
    renderContent().render(todoTemplate, renderContent().todoTk)
  })
  console.log( defaultTask.todos)
})