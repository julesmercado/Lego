Lego.factory( "getToyProjectNames",
	[
		"$http",
		function factory( $http ){
			var url = "http://demo1290827.mockable.io/lego/get/toy/all";
			
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