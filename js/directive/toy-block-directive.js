Lego.directive( "toyBlock",
[
	function directive( ){
		return {
			"scope": {
				"projectName": "="
			},
			"restrict": "A",
			"controller": "toyBlockController",

			"template":
				"<span ng-model='projectName'>{{projectName}}</span>"+
				"<div ng-repeat='group in groupList'>" + 
					"<div group-block group-data='group'></div>" +
				"</div>",

			"link": function link( scope, element, attribute ){
				element.css({
					width: '55px'
				});
			}
		}
	}
] );