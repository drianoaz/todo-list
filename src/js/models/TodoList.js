class TodoList {

	constructor() {
		this._list = [];
	}

	get list() {
		return [].concat(this._list);
	}

	add(todoItem) {
		this._list.push(todoItem);
	}

	empty() {
		this._list = [];
	}
}
