(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService'];
function SignupController(MenuService) {
  var signupCtrl = this;

signupCtrl.Submit = function(){

// console.log(signupCtrl.user);

 // signupCtrl.menuitem  = [];
// var i = 0;

signupCtrl.favoriteNOK = 0;
signupCtrl.saveOK = 0;

var promise = MenuService.getMenuItem(signupCtrl.user.favorite);

promise.then(function (response) {
  // console.log(response);

if (response === 0) signupCtrl.favoriteNOK = 1;


if (response > 0) {
  MenuService.saveuser(signupCtrl.user);
  signupCtrl.saveOK = 1;
  // console.log('serviceuser:', MenuService.user);
}

  // signupCtrl.menuitem = response;

  // menu.found = response.data;
  // if( menu.found.length === 0 ) menu.showerror = true;

  })
.catch(function (error) {
  console.log(error);
});

// console.log(signupCtrl.menuitem)


// var menuitem = MenuService.getMenuItem(signupCtrl.user.favorite);
// // signupCtrl.menuitem = MenuService.getCategories();
//  console.log(menuitem)

};

}


})();
