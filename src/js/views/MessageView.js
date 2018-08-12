import View from './View';

export default class MessageView extends View {

  _template(model) {

    let template = '';

    if (model.message) {
      switch (model.type) {
      case 'success':
      case 'info':
      case 'danger':
      case 'warning':
        template = `<div class="alert alert-${model.type}" role="alert">${
          model.message
        }</div>`;

        break;
      default:
        template = `<div class="alert alert-info" role="alert">${model.message}</div>`;
        break;
      }
    }

    return template;
  }
}
