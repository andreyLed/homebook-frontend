import ng from 'angular';
import OperationFormComponent from './component';
import OperationFormService from './service';

export default ng.module('app.components.operationForm', [])
    .service('operationFormService', OperationFormService)
    .component('operationForm', OperationFormComponent)
    .name;
