import template from './operationsItem.html';

export default {
  template,
  bindings: {
    item: '<',
    removeOperation: '&',
    editOperation: '&'
  }
};
