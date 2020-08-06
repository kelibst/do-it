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
  let taskTemplate = ` 

                      <div class="card-bins">
                          <h6 class="card-title py-2 text-uppercase text-ligth">Today</h6>
                          <i class="fas fa-trash text-danger delete"></i>
                      </div>

                      <div id="todoTk">
           
                      </div>

                      <div class="add-btn text-center">
                          <a href="#" class="btn addTodobtn btn-outline-primary"><i class="fas fa-plus"></i> Add To do</a>
                      </div>

                          `
let todoTemplate = `
                    <div class="card-bins">
                    <p class="text-success text-uppercase">Low-Priority</p>
                    <i class="fas fa-trash ml-2 text-danger delete"></i>
                    </div>

                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nulla distinctio explicabo voluptate laboriosam pariatur quasi veniam neque eius voluptates.</p>
                    <a href="#" class="btn btn-outline-success"><i class="fas fa-check" ></i> Done!</a>
                    <a href="#" class="btn btn-outline-danger"><i class="fas fa-check" ></i> Not Done!</a>
                  `

//set a function to render all content on the page task or todo                  
          function renderContent(){

            return {
             allTk: document.getElementById('allTk'),
             todoTk: document.getElementById('todoTk'),
              render(template,  node, container = document.createElement('div')) {
                if(node === this.allTk){
                  container.classList = "card shadow col-sm-6 col-lg-4 p-3 round1 border-0 bg-white";
                }else{
                  container.classList = "card-body border my-4 round1";
                }
                //clear the container before filling it up
                container.innerHTML = "";
                container.innerHTML = template;
                node.appendChild(container);
              },


            }
          }

      

export {Task, Todo, renderContent, taskTemplate, todoTemplate}
