import TodoController from './controllers/TodoController';

import '../scss/style.scss';

window.todoController = new TodoController({
  input: '#todo',
  container: '#todo-container',
  message: '#message-container'
});
