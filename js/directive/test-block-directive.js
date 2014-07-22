Lego.directive( "testBlock",
	[
		"blocksBgColor",
		function directive( blocksBgColor ){

			return {
				"scope": {
					"testData": "="
				},
				"controller": "",
				"restrict": "A",

				"template": "<div></div>",

				"link": function link( scope, element, attribute ){
					
					blocksBgColor( scope, element );
				}
			}
		}
	] )