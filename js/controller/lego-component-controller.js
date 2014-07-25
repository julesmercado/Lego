Lego.controller( "LegoComponentController",
	[
		"$scope",
		"$interval",
		"getToyProjectNames",
		function LegoComponentController( $scope, $interval, getToyProjectNames ){
			getToyProjectNames( function onData( error, data ){
					if( error ){
						console.error( error );
					}else{
						$scope.projectList = data;	
					}
				} );
			$interval( function onInterval(){
				
				window.location.reload();

			}, 60000 );
		}
	] );