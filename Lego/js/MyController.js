var myApp = angular.module("myApp",[]);

	myApp.controller('Controller',function($scope, $http){
		$http.get('js/samplejson.json').success(function(data){
			
			$scope.names = data;

			var len = $scope.names.length;
			
			for(var i = 0;i<=len;i++){
				if($scope.names[i].flag==true){
					$scope.names[i].color = "blue";
				}else{
					$scope.names[i].color = "red";
			}
		}
			
	});
});
