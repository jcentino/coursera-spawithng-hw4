(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['MenuDataService', 'items', '$stateParams'];
function ItemsController(MenuDataService, items, $stateParams) {
  var itemsCtrl = this;
  itemsCtrl.items = items;
  itemsCtrl.shortName = $stateParams.shortName;
  console.log("itemsCtrl.items: ", itemsCtrl.items);
}

})();
