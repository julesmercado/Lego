Lego.factory( "buildTwoTestBlockLayout",
	[
		"$timeout",
		function factory( $timeout ){
			return function buildTwoTestBlockLayout( scope, element ){
				if( scope.testList.length !==2 ){
					return;
				}

				element.css( {
					"position": "relative",
					"width": "25px",
					"height": "61px"
				} );

				$timeout( function onTimeout( ){
					var groupBlock = $( element );		
					var	testList = scope.testList;

					for( var index = 0; index < testList.length; index++ ){
						var testBlock = $( "div#" + testList[ index ].id + "[ test-block ]", groupBlock );
						
						if ( index == 0 ){
							x = "0px";
							y = "0px";
						}else if ( index == 1 ){
							x = "0px";
							y = "26px";
						} 

						testBlock.css( {
							"position": "absolute",
							"width": "25px",
							"height": "25px",
							"left": x,
							"top": y
						} );
					}
					
												
				}, 0 );
			}
		}
	] );