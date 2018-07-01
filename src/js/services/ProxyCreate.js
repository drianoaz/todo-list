class ProxyCreate {

	static create(model, view) {

		return new Proxy(model, {

			get(target, prop, receiver) {

				if(typeof target[prop] === 'function') {

					return function() {

						let temp = Reflect.apply(target[prop], target, arguments);

						view.update(target);

						return temp;
					}
				}

				return Reflect.get(target, prop, receiver)
			},

			set(target, prop, value, receiver) {

				let temp = Reflect.set(target, prop, value, receiver);

				view.update(target);

				return temp;
			}

		});
	}
}
