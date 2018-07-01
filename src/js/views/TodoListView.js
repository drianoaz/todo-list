class TodoListView extends View {

	_template(model) {
		return `
			<ul class="list-group">
				${model.list.map(todoItem => `

					<li class="list-group-item">
						Value: ${todoItem.value} <br>
						Reverse Value: ${todoItem.reverseValue}<br>
						Upper: ${todoItem.toUpper()}<br>
						lower: ${todoItem.toLower()}
					</li>

				`).join('')}
			</ul>
		`;
	}

}
