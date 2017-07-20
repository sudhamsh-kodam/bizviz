(function() {
  'use strict';

  angular
    .module('bizViz')
    .controller('bizvizCtrl', bizvizCtrl);

  /** @ngInject */
  function bizvizCtrl($scope, $mdSidenav) {
    var bvc = this;
    bvc.toggleLeft = buildToggler('left');
    bvc.toggleRight = buildToggler('right');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      }
    }
    bvc.tab = 1;

    bvc.setTab = function(tabId) {
      bvc.tab = tabId;
    };

    bvc.isSet = function(tabId) {
      return bvc.tab === tabId;
    };
  }
})();
