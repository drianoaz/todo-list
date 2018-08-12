import ProxyCreate from '../services/ProxyCreate';

export default class Bind {

  constructor(model, view) {

    const proxy = ProxyCreate.create(model, view);

    view.update(model);

    return proxy;
  }
}
