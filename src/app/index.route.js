(function() {
  'use strict';

  angular
    .module('bizViz')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('bizviz', {
        url: '/bizviz',
        templateUrl: 'app/bizviz/bizviz.dashboard.html',
        controller: 'bizvizCtrl',
        controllerAs: 'bvc'
      });
    // .state('home', {
    //   url: '/',
    //   templateUrl: 'app/main/main.html',
    //   controller: 'MainController',
    //   controllerAs: 'main'
    // })


    $urlRouterProvider.otherwise('bizviz');
  }

})();
