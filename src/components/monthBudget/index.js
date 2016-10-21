import ng from 'angular';
import MonthBudgetComponent from './monthBudget.component';

export default ng.module('monthBudget.components.app', [])
    .component('monthBudget', MonthBudgetComponent)
    .name;