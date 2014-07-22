Lego.factory( "buildOneTestBlockLayout",
	[
		"$timeout",
		function factory( $timeout ){
			return function buildOneTestBlockLayout( scope, element ){
				if( scope.testList.length != 1 ){
					return ;
				}

				element.css( {
					"position": "relative",
					"width": "35px",
					"height": "35px"
				} );

				$timeout( function onTimeout( ){
					var groupBlock = $( element );
					var testList = scope.testList;
					
					for( var index = 0; index < testList.length; index++ ){
						var testBlock = $( "div#" + testList[ index ].testCaseID + "[test-block]", groupBlock );
						
						testBlock.css( {
							"position": "absolute",
							"width": "25px",
							"height": "25px",
							"left": "0px",
							"top": "0px"
						} );
					}

				}, 0 );			
			}
		}
] );

