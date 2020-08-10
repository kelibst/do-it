const allContainer = document.querySelector('.all-container');
const addTask = document.querySelector('.addnewTask');
const addTodo = document.querySelector('.addTodo');
const taskForm = document.querySelector('.addTask');
const todoContainer = document.querySelector('.todo-container');
const addTodobtn = document.getElementById('allTk');
const taskContainer = document.querySelector('.taskContainer');
const searchIcon = document.querySelector('.searchIcon');

function handleForm() {
  return {
    showForm(container) {
      allContainer.classList.remove('d-none');
      container.classList.remove('d-none');
    },

    closeForm() {
      allContainer.classList.add('d-none');
      todoContainer.classList.add('d-none');
      taskContainer.classList.add('d-none');
    },
  };
}

export {
  handleForm, addTask,
  taskForm,
  allContainer,
  addTodo,
  todoContainer,
  searchIcon,
  taskContainer,
  addTodobtn,
};
