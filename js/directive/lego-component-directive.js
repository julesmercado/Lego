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
						"<div class='col-sm-4' ng-repeat='projectName in projectList' id='projectName'>" +
							"<div toy-block project-name='projectName'></div>" +
						"</div>" +
					"</div>",
				"link": function link( scope, element, attribute ){
					
				}
			};
		}
	] );