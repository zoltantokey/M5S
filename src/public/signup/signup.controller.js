(function () {
"use strict";

angular.module('public')
.controller('mydataController', mydataController);

mydataController.$inject = ['MenuService'];
function mydataController(MenuService) {
  var mydataCtrl = this;


mydataCtrl.user = MenuService.user;



}


})();
