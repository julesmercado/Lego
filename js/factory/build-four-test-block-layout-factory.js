Lego.factory( "buildFourTestBlockLayout",
	[
		"$timeout",
		function factory( $timeout ){
			return function buildFourTestBlockLayout( scope, element ){
				if( scope.testList.length !=4 ){
					return;
				}

				element.css( {
					"position": "relative",
					"width": "61px",
					"height": "61px"
				} );

				$timeout( function onTimeout( ){
					var groupBlock = $( element );
					var testList = scope.testList;
					
					for( var index = 0; index < testList.length; index++ ){
						var testBlock = $( "div#" + testList[ index ].id + "[test-block]", groupBlock );
						
						if ( index === 0 ){
							x = "0px";
							y = "0px";
						}else if ( index === 1 ){
							x = "0px";
							y = "26px";
						}else if ( index === 2 ){
							x = "26px";
							y = "0px";
						}else if ( index === 3 ){
							x = "26px";
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
	]);