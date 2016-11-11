import template from './operationForm.html';
import style from './style.less';
import controller from './controller';

export default {
  template,
  style,
  controller,
  bindings: {
    accountsData: '<',
    categoriesData: '<',
    inputs: '<',
    operationSend: '&',
    operationCancel: '&'
  }
};
