Lego.directive( "toyBlock",
[
	function directive( ){
		return {
			"scope": {
				"projectName": "="
			},
			"restrict": "AE",
			"controller": "toyBlockController",

			"template":
				"<span ng-model='projectName'></span>"+
				"<div ng-repeat='group in groupList' style='float:left'>" + 
					"<div group-block group-data='group'></div>" +
				"</div>",

			"link": function link( scope, element, attribute ){
					//console.log($(projectName));
					//console.log(projectName);
			}
		}
	}
] );