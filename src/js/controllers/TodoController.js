import Bind from '../helpers/Bind';
import TodoList from '../models/TodoList';
import TodoItem from '../models/TodoItem';
import Message from '../models/Message';
import TodoListView from '../views/TodoListView';
import MessageView from '../views/MessageView';

export default class TodoController {

  constructor(selectors) {

    const { input, container, message } = selectors;
    const $ = document.querySelector.bind(document);

    this._inputTodo = $(input);

    this._todoList = new Bind(new TodoList(), new TodoListView($(container)));
    this._message = new Bind(new Message(), new MessageView($(message)));
  }

  onSubmit(event) {

    event.preventDefault();

    try {

      this._todoList.add(new TodoItem(this._inputTodo.value));
      this._setMessage('Todo Item has been created.', 'success');
      this._clearForm();
    } catch (error) {

      // eslint-disable-next-line
      console.error(error);
      this._setMessage(error.message, 'danger');
    }
  }

  onClean(event) {

    event.preventDefault();

    this._todoList.empty();
    this._setMessage('Todo List has been cleaned.', 'warning');
  }

  _clearForm() {

    this._inputTodo.value = '';
    this._inputTodo.focus();
  }

  _setMessage(message, type) {

    this._message.message = message;
    this._message.type = type;
  }
}
