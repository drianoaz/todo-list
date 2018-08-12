import TodoController from './controllers/TodoController';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';

window.todoController = new TodoController({
  input: '#todo',
  container: '#todo-container',
  message: '#message-container'
});
