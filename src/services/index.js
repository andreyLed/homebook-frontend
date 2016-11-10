import ng from 'angular';
import storage from './storage';
import user from './user';

export default ng.module('app.service', [])
.service('storage', storage)
.service('user', user)
.name;
