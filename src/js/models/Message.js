export default class Message {

  constructor(message = '', type = 'info') {

    this._message = message;
    this._type = type;
  }

  get message() {

    return this._message;
  }

  set message(message) {

    this._message = message;
  }

  get type() {

    return this._type;
  }

  set type(type) {

    this._type = type;
  }
}
