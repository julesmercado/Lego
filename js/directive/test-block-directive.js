Lego.directive( "testBlock",
	[
		function directive( ){

			return {
				"scope": {
					"testData": "="
				},
				"controller": "",
				"restrict": "A",

				"template": "<div></div>",

				"link": function link( scope, element, attribute ){
					var testCaseId = scope.testData.testCaseID;
					var testCaseState = scope.testData.state;
					
					if(testCaseState){
						element.css({
							"background-color": "green",
						});
					}else{
						element.css({
							"background-color": "red",
						});
					}
					//console.log(testCaseState);
				}
			}
		}
	] )