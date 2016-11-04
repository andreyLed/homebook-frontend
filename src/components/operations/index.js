import ng from 'angular';
import operationsComponent from './component';
import operationsService from './service';

export default ng.module('app.components.operations', [])
  .service('operationsService', operationsService)
  .component('operations', operationsComponent)
  .name;
