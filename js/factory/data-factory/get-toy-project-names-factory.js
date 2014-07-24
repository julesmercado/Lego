Lego.factory( "getToyProjectNames",
	[
		"$http",
		function factory( $http ){
			var url = "localhost:8080";
			
			return function getToyProjectNames( callback ){
				$http.get( url )
					.success( function onSuccess( result ){
						callback( null, result.data );
					} )
					.error( function onError( error ){
						callback( error );
					} );
			};
		}
	] );