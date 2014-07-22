Lego.directive( "legoComponent",
	[
		function directive( ){
			return {
				"scope": {
					"source": "@?"
				},
				"restrict": "A",
				"controller": "LegoComponentController",
				
				"template":
					"<div ng-repeat='projectName in projectList' id='projectName'>" +
						"<div toy-block project-name='projectName'></div>" +
					"</div>",
				
				"link": function link( scope, element, attribute ){
					
				}
			};
		}
	] );