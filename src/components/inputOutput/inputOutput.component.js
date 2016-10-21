import template from './inputOutput.html';
import controller from './inputOutput.controller';

export default {
    template,
    controller,
    bindings:{
        item: '<',
        update: '&'
    }
};