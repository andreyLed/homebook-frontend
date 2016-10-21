import ng from 'angular';
import operations from './operations';

export default  ng.module('app.operationsService', [])
  .service('operationsService', operations)
  .name;

