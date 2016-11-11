import template from './operationForm.html';
import controller from './controller';

export default {
  template,
  controller,
  bindings: {
    accountsData: '<',
    categoriesData: '<',
    inputs: '<',
    operationSend: '&',
    operationCancel: '&'
  }
};
