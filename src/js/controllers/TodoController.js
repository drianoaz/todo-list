class TodoController {

	constructor(selectors) {
    const { input, container } = selectors

		let $ = document.querySelector.bind(document);

		this._inputTodo = $(input);

		this._todoList = new Bind(
			new TodoList(),
			new TodoListView($(container))
		);

		this._message = new Bind(
			new Message(),
			new MessageView($(container))
		);
	}

	onSubmit(event) {

		event.preventDefault();

		try {

			this._todoList.add(new TodoItem(this._inputTodo.value));
			this._setMessage('Todo Item has been created.', 'success');
			this._clearForm();

		} catch(error) {

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
