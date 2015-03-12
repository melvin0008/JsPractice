app.directive("panel",function(){
	return{
		restrict:"E",
		template:"<div class='panel' ng-transclude>This is my panel</div>"
	}
})