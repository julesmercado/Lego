Lego.factory( "blocksBgColor", 
	[
		function factory(  ){
			return function blocksBgCOlor( scope, element ){
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
			};
		}
	]
)