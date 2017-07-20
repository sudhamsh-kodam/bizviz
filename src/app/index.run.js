(function() {
  'use strict';

  angular
    .module('bizViz')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
