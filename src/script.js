import {handleForm, addTask,addTodo, allContainer,todoContainer, taskContainer, taskForm, addTodobtn} from './dom'
import {Task, Todo, renderContent} from './tasks'

function loadContents(){
    return {
        contents(){


        let today = Task("Today");
        let alltask =[];
        alltask.push(today)
        let todoNode = renderContent().todoTk;


        //add initial todos
        let defaultTask = alltask[0];
        defaultTask.todos.push(Todo("Buy milk", 'early in the morning', '11/02/1991','Low Priority'));

        //load the initial elements to the dom
        document.addEventListener('DOMContentLoaded', () => {
            alltask.forEach(function(value,index){
            renderContent().render(renderContent().allTk, value, index);

            value.todos.forEach(function(value, index){
            console.log(index)
            renderContent().render(renderContent().todoTk, value, index)
            })
            });
        });

        // handle form events
        allContainer.addEventListener('click', e => {

            if(e.target.classList.contains('close-w')){
            handleForm().closeForm();
            }
        });
        
        addTask.addEventListener('click', () => {
            handleForm().showForm(taskContainer)
        });

        //handle task creation

        //set default task
        taskForm.taskBtn.addEventListener('click', (e) => {
            e.preventDefault();
            let title = taskForm.tasktitle.value;
            let newTask = new Task(title)
            alltask.push(newTask);
            console.log(alltask);
            alltask.find((value, index) => {
               
            if(value === newTask){
                renderContent().render(renderContent().allTk, value, index)
            } ;
            })
            
        
        })

        addTodobtn.addEventListener('click', (e) => {
 

            // let's change the default task to the one the user selected.
            let taskId = e.target.offsetParent.id;
            defaultTask = alltask[taskId[4]];
          
            todoNode = e.target.offsetParent.childNodes[3];
            
            //select item to delete and remove it from the dom
            if(e.target.classList.contains('delete')){
              
              console.log(e.target.offsetParent.id, e.target.parentElement.innerHTML)
              let id = e.target.offsetParent.id;
              const parent = document.getElementById(id);
              console.log(parent.innerHTML)
              //parent.remove()
            }
            
            if(e.target.classList.contains('addTodobtn')){
              handleForm().showForm(todoContainer)
            }
          });

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
               defaultTask.todos.find((value, index) => {
                if(value === setTodo){
                    renderContent().render(todoNode, value, index)
                } ;
                });
                
            })
        }
    }
}

export default loadContents