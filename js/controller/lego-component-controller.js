Lego.controller( "LegoComponentController",
	[
		"$scope",
		"getToyProjectNames",
		function LegoComponentController( $scope, getToyProjectNames ){
			getToyProjectNames( function onData( error, data ){
					if( error ){
						console.error( error );
					}else{
						$scope.projectList = data;	
					}
				} );
		}
	] );