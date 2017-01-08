(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.user = {};



  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getMenuItem = function (short_name) {
    return $http({
    				method: 'GET',
    				url: ApiPath + '/menu_items.json'
    			}).then(function (result) {
    				var foundItems = result.data.menu_items.filter(function (item) {
    				return item.short_name.toLowerCase() == short_name.toLowerCase();
    			});

          // var i = {
          //   nr:0
          // };
          // i.nr = foundItems.length;

// console.log('founditems:',foundItems);

    				return foundItems.length;
    			});
    // return $http.get(ApiPath + '/menu_items.json').then(function (result) {
    //
		// 		var foundItems = result.data.menu_items.filter(function (item) {
		// 		return item.short_name == short_name;
		// 	});
    //   // var i = {nr:0};
    //   // i.nr = foundItems.length;
    //   // console.log(foundItems.length);
		// 		return foundItems;
		// 	})
      // .catch(function (error) {
			//     console.log(error);
      //
		  //   });
  };





service.saveuser = function (userdata) {

service.user = userdata;

};

}



})();
