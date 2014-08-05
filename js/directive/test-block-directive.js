Lego.directive( "testBlock",
	[
		"blocksBgColor",
		function directive( blocksBgColor ){

			return {
				"scope": {
					"testData": "="
				},
				"controller": "testBlockController",
				"restrict": "AE",

				"template": 
					"<div class='block' ng-click='sayTrue()'>" +
						"<div test-case-info show='show' test-id='id'></div>" +
				 	"</div>",

				"link": function link( scope, element, attribute ){
					scope.id = scope.testData.id;
					blocksBgColor( scope, element );

					$( ".block", element ).css({
						width: "25px",
						height: "25px"
					});
				}
			}
		}
	] )