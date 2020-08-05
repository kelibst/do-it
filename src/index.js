import {handleForm, addTask,addTodo, allContainer,todoContainer, taskContainer, taskForm, addTodobtn} from './dom'
import {Task} from './tasks'

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
let alltask =[]
taskForm.taskBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let title = taskForm.tasktitle.value;
  let newTask = new Task(title)
  alltask.push(newTask)
  console.log(alltask[0])
})

addTodo.todoBtn.addEventListener('click', (e)=> {
  e.preventDefault();
  console.log(addTodo.todotitle.value, addTodo.tododesc.value, addTodo.dateofbirth.value, addTodo.priority.value, addTodo.note.value)
})