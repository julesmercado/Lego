Lego.controller( 'testBlockController', 
	[
		"$scope",
		function testBlockController( $scope ){
			$scope.show = false;
			$scope.sayTrue = function(){
				
				var state = $scope.testData.state;
				
				if(!state){
					$scope.show = !$scope.show;	
				}else{
					console.log('clicked');	
				}
				
				
			};
			
		}
	] );