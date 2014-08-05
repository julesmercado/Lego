Lego.directive( "groupBlock",
	[
		"$timeout",
		"buildOneTestBlockLayout",
		"buildTwoTestBlockLayout",
		"buildThreeTestBlockLayout",
		"buildFourTestBlockLayout",
		"buildFiveTestBlockLayout",
		"buildSixTestBlockLayout",
		function directive( $timeout, 
			buildOneTestBlockLayout, 
			buildTwoTestBlockLayout, 
			buildThreeTestBlockLayout, 
			buildFourTestBlockLayout, 
			buildFiveTestBlockLayout, 
			buildSixTestBlockLayout )
		{
			return {
				"scope": {
					"groupData": "="
				},
				"restrict": "A",
				"controller": "LegoComponentController", 
				
				"template": 
					"<div ng-repeat='test in testList'>" +
						"<div id='{{test.id}}' test-block test-data='test'></div>" + 
					"</div>",
				
				"link": function link( scope, element, attribute ){
					scope.testList = scope.groupData;
					testList = scope.testList;
					
					//console.log(test);
					buildOneTestBlockLayout( scope, element );
					buildTwoTestBlockLayout( scope, element );
					buildThreeTestBlockLayout( scope, element );
					buildFourTestBlockLayout( scope, element );
					buildFiveTestBlockLayout( scope, element );
					buildSixTestBlockLayout( scope, element );

				}								
			};
		}
	] );