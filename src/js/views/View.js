export default class View {
  constructor(element) {

    this._element = element;
  }

  update(model) {

    this._element.innerHTML = this._template(model);
  }
}
