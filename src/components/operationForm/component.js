import template from './operationForm.html';
import controller from './controller';

export default {
  template,
  controller,
  bindings: {
    accounts: '<',
    categories: '<',
    inputs: '<',
    operationSend: '&',
    operationCancel: '&'
  }
};
