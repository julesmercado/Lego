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
					//console.log($scope.projectList);
				} );
			$interval( function onInterval(){
				
				window.location.reload();

			}, 6000000 );
		}
	] );