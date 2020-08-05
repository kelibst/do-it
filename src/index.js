const allContainer = document.querySelector('.all-container');
const addTask = document.querySelector('.addnewTask');
const taskForm = document.querySelector('.addTask');
const todoContainer = document.querySelector('.todo-container');
const addTodobtn = document.querySelector('.addTodobtn'); 
const taskContainer = document.querySelector('.taskContainer')
// display addTask form when it is clicked

addTask.addEventListener('click', (e) => {
    allContainer.classList.remove('d-none');
   todoContainer.classList.remove('d-none');
});

// hide all forms when the container is clicked
allContainer.addEventListener('click', e => {

 if(e.target.classList.contains('close-w')){
   allContainer.classList.add('d-none');
   todoContainer.classList.add('d-none');
   taskContainer.classList.add('d-none')
   
 }
});

addTodobtn.addEventListener('click', () => {
  allContainer.classList.remove('d-none');
  taskContainer.classList.remove('d-none')
})

