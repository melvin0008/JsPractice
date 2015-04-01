// Long hand version
app.directive("enter",function(){
	return {
		restrict:"A",   //default is A
		link:function(scope,element,attrs){
			element.bind("mouseenter",function(){
				scope.$apply(attrs.enter)
			})

		}
	}
})

//short hand version
app.directive("enter2",function(){
	return function(scope,element,attrs){
			element.bind("mouseenter",function(){
				scope.$apply(attrs.enter2)
			})	
	}
})