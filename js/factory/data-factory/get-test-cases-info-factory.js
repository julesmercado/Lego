Lego.factory( "getTestCasesInfo",
	[
		"$http",
		function factory( $http ){
      		var url = "http://demo1290827.mockable.io/lego/get/test/all";
      		
			return function getTestCasesInfo( testCaseId, callback ){

				$http.get( url )
					.success( function onSuccess( result ){
						callback( null, result.data );	
					} )
					.error( function onError( error ){
						callback( error );
					} );
			}
		}
	] );