import ng from 'angular';
import book from './book';

export default  ng.module('app.bookService', [])
  .service('bookService', book)
  .name;


