import TodoController from './controllers/TodoController';

window.todoController = new TodoController({
  input: '#todo',
  container: '#todo-container',
  message: '#message-container'
});
