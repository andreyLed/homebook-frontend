import ng from 'angular';
import bookService from './book';
import inputOutputService from './inputOutput';
import operationsService from './operations';

export default ng.module('app.services', [bookService, inputOutputService, operationsService])
    .name;