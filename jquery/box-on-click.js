$(document).ready( function(){
				$("body").delegate("div[test-block]" , "click" , function(){
					alert($(this).attr('id'));
				});				
			});