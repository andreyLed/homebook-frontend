import template from './operationsItem.html';

export default {
  template,
  bindings: {
    itemData: '<',
    removeOperation: '&',
    editOperation: '&'
  }
};
