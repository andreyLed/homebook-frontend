import ng from 'angular';
import storage from './storage';

export default ng.module('app.service.storage', [])
.service('storage', storage)
.name;
