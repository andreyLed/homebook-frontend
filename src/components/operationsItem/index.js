import ng from 'angular';
import operationsItemComponent from './component';

export default ng.module('app.components.operationsItem', [])
  .component('operationsItem', operationsItemComponent)
  .name;
