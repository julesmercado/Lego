Lego.controller( "toyBlockController", 
	[
		"$scope",
		"getTestCasesData",
		function toyBlockController( $scope, getTestCasesData ){
			getTestCasesData( $scope.projectName,
				function onData( error, data ){
					if ( error ){
						console.error( error );
					}else{
						$scope.groupList = data;
					}
					//console.log($scope.groupList[0]);
				} );
		}
	] );