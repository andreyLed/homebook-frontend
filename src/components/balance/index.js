import ng from 'angular';
import balanceComponent from './component';

export default ng.module('app.components.balance', [])
  .component('balance', balanceComponent)
  .name;
