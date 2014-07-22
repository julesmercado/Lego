Lego.factory( "buildThreeTestBlockLayout",
	[
		"$timeout",
		function factory( $timeout ){
			return function buildThreeTestBlockLayout( scope, element ){
				if( scope.testList.length !==3 ){
					return;
				}

				element.css( {
					"position": "relative",
					"width": "25px",
					"height": "87px"
				} );

				$timeout( function onTimeout( ){
					var groupBlock = $( element );
					var	testList = scope.testList;
						
					for( var index = 0; index < testList.length; index++ ){
						var testBlock = $( "div#" + testList[ index ].testCaseID + "[ test-block ]", groupBlock );
						
						if ( index == 0 ){
							x = "0px";
							y = "0px";
						}else if ( index == 1 ){
							x = "0px";
							y = "26px";
						}else if ( index == 2 ){
							x = "0px";
							y = "52px";
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