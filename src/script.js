/* eslint-disable   array-callback-return */
import {
  handleForm,
  addTask,
  addTodo,
  allContainer,
  todoContainer,
  taskContainer,
  taskForm,
  addTodobtn,
  searchIcon,
} from './dom';
import { Task, Todo, renderContent } from './tasks';

function loadContents() {
  return {
    contents() {
      let alltask = [];
      let defaultTask;

      // search search input when icon is clicked

      searchIcon.addEventListener('click', (e) => {
        e.target.nextElementSibling.classList.remove('d-none');
      });

      if (localStorage.length < 1) {
        const today = Task('Today');

        alltask.push(today);
        ([defaultTask] = alltask);
        // add initial todos

        defaultTask.todos.push(Todo('Buy milk', 'early in the morning', '11/02/1991', 'Low Priority'));
      } else {
        const storedlist = localStorage.getItem('alltask');
        alltask = JSON.parse(storedlist);
      }

      let todoNode = renderContent().todoTk;

      // load the initial elements to the dom
      document.addEventListener('DOMContentLoaded', () => {
        alltask.forEach((value, index) => {
          renderContent().render(renderContent().allTk, value, index);

          value.todos.forEach((newvalue, newindex) => {
            renderContent().render(document.getElementById(`todoTk${index}`), newvalue, newindex);
          });
        });
      });

      // handle form events
      allContainer.addEventListener('click', e => {
        if (e.target.classList.contains('close-w')) {
          handleForm().closeForm();
        }
      });

      addTask.addEventListener('click', () => {
        handleForm().showForm(taskContainer);
      });

      // handle task creation

      // set default task
      taskForm.taskBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const title = taskForm.tasktitle.value;
        const newTask = new Task(title);
        alltask.push(newTask);
        taskForm.tasktitle.value = '';
        handleForm().closeForm();
        localStorage.setItem('alltask', JSON.stringify(alltask));
        alltask.find((value, index) => {
          if (value === newTask) {
            renderContent().render(renderContent().allTk, value, index);
          }
        });
      });

      addTodobtn.addEventListener('click', (e) => {
        // let's change the default task to the one the user selected.
        const taskId = e.target.offsetParent.id;

        defaultTask = alltask[parseInt(taskId[4], 10)];

        [, , , todoNode] = e.target.offsetParent.childNodes;

        // select item to delete and remove it from the dom
        if (e.target.classList.contains('delete')) {
          if (e.target.classList.contains('taskDelete')) {
            // filter out task if delete button is pressed
            alltask = alltask.filter((value, index) => index !== parseInt(e.path[2].id[4], 10));
            localStorage.setItem('alltask', JSON.stringify(alltask));
          } else if (e.target.classList.contains('todoDelete')) {
            const iid = parseInt(e.path[2].id[4], 10);
            defaultTask.todos = defaultTask.todos.filter((value, index) => index !== iid);
          }
          localStorage.setItem('alltask', JSON.stringify(alltask));

          e.path[2].remove();
        }

        // add select option when the pen button is clicked

        if (e.target.classList.contains('edit')) {
          const currentTodo = defaultTask.todos[parseInt(e.path[1].id[4], 10)];
          addTodo.todotitle.value = currentTodo.name;
          addTodo.tododesc.value = currentTodo.description;
          addTodo.dateofbirth.value = currentTodo.duedate;

          addTodo.priority.value = currentTodo.priority;
          addTodo.note.value = currentTodo.value;
          handleForm().showForm(todoContainer);
          localStorage.setItem('alltask', JSON.stringify(alltask));
        }

        if (e.target.classList.contains('addTodobtn')) {
          handleForm().showForm(todoContainer);
        }

        localStorage.setItem('alltask', JSON.stringify(alltask));
      });

      // add task when the button is clicked
      addTodo.todoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const name = addTodo.todotitle.value;
        const description = addTodo.tododesc.value;
        const dateofbirth = addTodo.dateofbirth.value;
        const priority = addTodo.priority.value;
        const note = addTodo.note.value;

        const setTodo = Todo(name, description, dateofbirth, priority, note);
        defaultTask.todos.push(setTodo);
        localStorage.setItem('alltask', JSON.stringify(alltask));

        addTodo.todotitle.value = '';
        addTodo.tododesc.value = '';
        addTodo.dateofbirth.value = '';
        addTodo.priority.value = '';
        addTodo.note.value = '';
        handleForm().closeForm();
        defaultTask.todos.find((value, index) => {
          if (value === setTodo) {
            renderContent().render(todoNode, value, index);
          }
        });
      });
    },
  };
}

export default loadContents;