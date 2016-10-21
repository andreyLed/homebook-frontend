import ng from 'angular';
import homePanelComponent from './homePanel.component';

export default ng.module('homePanel.components.app', [])
    .component('homePanel', homePanelComponent)
    .name;