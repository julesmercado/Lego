Lego.controller( "testCaseInfoController", 
	[
		"$scope",
		"getTestCasesInfo",
		function testCaseInfoController( $scope, getTestCasesInfo ){
			
			$scope.$watch("dialogMade", function onWatch( newValue, oldValue ){
				if( newValue != oldValue && !newValue ){
					
				}else if( newValue != oldValue && newValue ){
					getTestCasesInfo( $scope.testId,
						function onData( error, data ){
							if ( error ){
								console.error( error );
							}else{
								$scope.groupList = data;
								
								$scope.groupList.forEach( function( groupList ){
									groupList.forEach( function( testList ){
										if( $scope.testId == testList.id ){
											$scope.testCase = testList.data;
											
										}
									} );
								});
							}
						} );
				}
			});
		}
	] );