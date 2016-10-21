import ng from 'angular';
import OperationsComponent from './operations.component';


export default ng.module('operations.components.app', [])
    .component('operations', OperationsComponent)
    .name;