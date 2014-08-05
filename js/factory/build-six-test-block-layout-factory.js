Lego.factory( "buildSixTestBlockLayout",
	[
		"$timeout",
		function factory( $timeout ){
			return function buildSixTestBlockLayout( scope, element ){
				if( scope.testList.length !=6 ){
					return;
				}

				element.css( {
					"position": "relative",
					"width": "61px",
					"height": "87px"
				} );

				$timeout( function onTimeout( ){
					var groupBlock = $( element );
					var testList = scope.testList;
					
					for( var index = 0; index < testList.length; index++ ){
						var testBlock = $( "div#" + testList[ index ].id + "[test-block]", groupBlock );
						
						if ( index == 0 ){
							x = "0px";
							y = "0px";
						}else if ( index == 1 ){
							x = "0px";
							y = "26px";
						}else if ( index == 2 ){
							x = "0px";
							y = "52px";
						}else if ( index == 3 ){
							x = "26px";
							y = "0px";
						}else if ( index == 4 ){
							x = "26px";
							y = "26px";
						}else if ( index == 5 ){
							x = "26px";
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