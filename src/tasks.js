const Task = (name) => ({
    name,
    todos: [],
  });
  
  const Todo = (name,description, duedate, priority, note="") => ({
    name,
    description,
    duedate,
    priority,
    note
    
  });

    //set task template
  function Templates (val, ind){
    return {
      taskTemplate: ` 

                  <div  class="card-bins">
                    <h6 class="card-title py-2 text-uppercase text-ligth">${val.name}</h6>
                    <i class="fas fa-trash text-danger taskDelete delete"></i>
                  </div>

                  <div id="todoTk${ind}">
                  
                  </div>

                  <div class="add-btn text-center">
                    <a href="#" class="btn addTodobtn btn-outline-primary"><i class="fas fa-plus"></i> Add To do</a>
                  </div>

                          `,
                          
      todoTemplate: `
                  <div class="card-bins">
                  <h6 class="card-title py-2 text-uppercase text-ligth">${val.name}</h6>
                  <p class="text-success text-uppercase">${val.priority}</p>
                  <i class="fas fa-trash ml-2 text-danger todoDelete delete"></i>
                  </div>

                  <p class="card-text">${val.description}</p>
                  <a href="#" class="btn btn-outline-success"><i class="fas fa-check" ></i> Done!</a>
                  <a href="#" class="btn btn-outline-danger"><i class="fas fa-check" ></i> Not Done!</a>
                `
        
    }
  }


  

//set a function to render all content on the page task or todo                  
          function renderContent(){

            return {
             allTk: document.getElementById('allTk'),
             todoTk: document.getElementById('todoTk'),
              render(node, val, ind) {
                let container = document.createElement('div')
               
                if(node === this.allTk){
                  container.id = `task${ind}`;
                  container.classList = `card shadow col-sm-6 col-lg-4 dlit  p-3 round1 my-2 border-0 bg-white ${ind}`;
                  container.innerHTML = "";
                  container.innerHTML = Templates(val, ind).taskTemplate;
                }else{
                  container.id = `todo${ind}`;
                  container.classList = "card-body border my-4 round1";
                  container.innerText = "";
                  container.innerHTML = Templates(val, ind).todoTemplate;
                }
                //clear the container before filling it up
               
                node.appendChild(container);
              },


            }
          }

      

export {Task, Todo, renderContent}
