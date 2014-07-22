Lego.controller( "toyBlockController", 
	[
		"$scope",
		"getTestCasesData",
		function getToyProjectNames( $scope, getTestCasesData ){
			getTestCasesData( $scope.projectName,
				function onData( error, data ){
					if ( error ){
						console.error( error );
					}else{
						$scope.groupList = data;
					}
				} );
		}
	] );