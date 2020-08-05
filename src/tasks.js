const Task = (name) => ({
    name,
    todos: [],
  });
  
  const Todo = (name,description, duedate, priority, note="") => ({
    name,
    description,
    duedate,
    priority
  });
export {Task, Todo}
