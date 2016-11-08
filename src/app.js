import 'bootstrap/less/bootstrap.less';
import 'font-awesome/less/font-awesome.less';
import 'sweetalert/dist/sweetalert.css';
import 'sweetalert/dist/sweetalert.min.js';

import ng from 'angular';
import uiBootstrap from 'angular-ui-bootstrap';
import uiRouter from 'angular-ui-router';
import components from './components';
import services from './services';

ng.module('app', [components, uiBootstrap, uiRouter, services])
  .config(($locationProvider, $stateProvider) => {
    'ngInject';
    $locationProvider.html5Mode(true);
    const states = [{
      name: 'home',
      url: '/',
      component: 'homePanel'
    },
      {
        name: 'operations',
        url: '/operations',
        component: 'operations'
      }
    ];
    states.forEach(state => $stateProvider.state(state));
  });
