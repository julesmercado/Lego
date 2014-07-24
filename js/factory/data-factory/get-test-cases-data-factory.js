Lego.factory( "getTestCasesData",
	[
		"$http",
		function factory( $http ){
      		var url = "localhost:8080";
			
			return function getTestCasesData( projectName, callback ){
				var toyUrl = url + "?toy=" + projectName;

				$http.get( toyUrl )
					.success( function onSuccess( result ){
						callback( null, result.data );	
					} )
					.error( function onError( error ){
						callback( error );
					} );
			}
		}
	] );
