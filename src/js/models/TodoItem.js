export default class TodoItem {

  constructor(value) {

    if (!value) throw new Error('Can\'t create a TodoItem without a value');

    this._value = value;

    Object.freeze(this);
  }

  get value() {

    return this._value;
  }

  get reverseValue() {

    return this._value
      .split('')
      .reverse()
      .join('');
  }

  toUpper() {

    return this._value.toUpperCase();
  }

  toLower() {

    return this._value.toLowerCase();
  }
}
