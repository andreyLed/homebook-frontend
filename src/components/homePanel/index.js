import ng from 'angular';
import homePanelComponent from './component';

export default ng.module('app.components.homePanel', [])
  .component('homePanel', homePanelComponent)
  .name;
