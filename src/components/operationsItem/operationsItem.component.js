import template from './operationsItem.html';
import controller from './operationsItem.controller';

export default {
    template,
    controller,
    bindings: {
        item: '<',
        removeOperation: '&',
        editOperation: '&'
    }
};