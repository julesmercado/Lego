Lego.factory( "buildFiveTestBlockLayout",
	[
		"$timeout",
		function factory( $timeout ){
			return function buildFiveTestBlockLayout( scope, element ){
				if( scope.testList.length !=5 ){
					return;
				}

				element.css( {
					"position": "relative",
					"width": "55px",
					"height": "140px"
				} );

				$timeout( function  onTimeout( ){
					var groupBlock = $( element );
						testList = scope.testList;

					for( var index = 0; index < testList.length; index++ ){
						var testBlock = $( "div#" + testList[ index ].testCaseID + "[test-block]", groupBlock );
						
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
							x = "0px";
							y = "78px";
						}else if ( index == 4 ){
							x = "0px";
							y = "104px";
						}
						testBlock.css( {
							"position": "absolute",
							"width": "25px",
							"height": "25px",
							"left": x,
							"top": y
						} );
					}
					
												
				}, 1000 );
			}
		}
	]);