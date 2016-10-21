import ng from 'angular';
import BalanceComponent from './balance.component';

export default ng.module('balance.components.app', [])
    .component('balance', BalanceComponent)
    .name;