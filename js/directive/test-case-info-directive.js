Lego.directive('testCaseInfo', 
    [
      function directive( ) {
          return {
              "restrict": 'AE',
              "scope": {
                "show": '=',
                "testId": '='
              },
              "controller": "testCaseInfoController", 
              "template": 
                "<div ng-show='show' title='{{testCase.fullTitle}}'>" +
                  "Title: {{testCase.title}}<br/>" +
                  "Operator: {{testCase.err.operator}}<br/>" +
                  "Message: {{testCase.err.message}}<br/>" +
                "</div>",
              link: function( scope, element, attrs ) {

                scope.dialogMade = false;
                
                scope.$watch( "show", function onWatch( newValue, oldValue ){
                  if( newValue != oldValue && newValue ){
                    if( !scope.dialogMade ){
                      $( element ).dialog( {
                        "title": "Error",
                        "close": function( ){
                          scope.show = false;
                          scope.$apply();
                        },
                        "autoOpen": false
                      } );
                      scope.dialogMade = true;
                    }

                    $( element ).dialog( "open" );
                  }else if( newValue != oldValue && !newValue ){
                    if( scope.dialogMade ){
                      scope.dialogMade = false;
                      $( element ).dialog( "close" );  
                    }
                  }
                } );
                 
              }
          }
      }
  ] );