import ng from 'angular';
import inputOutput from './inputOutput';

export default  ng.module('app.inputOutputService', [])
  .service('inputOutputService', inputOutput)
  .name;

