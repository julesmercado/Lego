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
					"<div class='row'>" +
						"<div class='col-xs-3' ng-repeat='projectName in projectList'>" +
							"<div toy-block project-name='projectName'></div>" +
						"</div>" +
					"</div>",
				"link": function link( scope, element, attribute ){
					
				}
			};
		}
	] );