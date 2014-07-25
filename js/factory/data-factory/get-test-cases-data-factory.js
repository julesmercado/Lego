Lego.factory( "getTestCasesData",
	[
		"$http",
		function factory( $http ){
      		var url = "http://localhost:8080/lego/test/all";
			
			return function getTestCasesData( projectName, callback ){
				var toyUrl = url + "?packageName=" + projectName;

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
