class Bind {

	constructor(model, view) {

		let proxy = ProxyCreate.create(model, view);

		view.update(model);

		return proxy;
	}
}
