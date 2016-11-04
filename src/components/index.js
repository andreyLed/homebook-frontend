import ng from 'angular';
import homePanel from './homePanel';
import operationForm from './operationForm';
import balance from './balance';
import monthBudget from './monthBudget';
// import chart from './chart';

import operations from './operations';
import operationsItem from './operationsItem';

export default ng.module('app.components', [homePanel, operationForm, balance, monthBudget, operations, operationsItem])
    .name;
