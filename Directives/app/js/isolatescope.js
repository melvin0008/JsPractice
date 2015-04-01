app.directive("kid",function(){
	return {
		restrict:"E",
		scope:{
			done:"&"  //scope restricted to only one. &-> expression . expression is passed 
		},
		template: '<input class="form-control" type="text" ng-model="chore">{{chore}}'+
		'<div class="btn btn-primary" ng-click="done({chore:chore})">Im done</div>' 
		// done of the scope(which is defined in the view call) is called
		// chore is sent to the controller
		// The done() method is invoked in the template, passed an object which wraps the value model 
		// taken from the input.(chore) 
		// The done() method is mapped to the logChore() method in the view, 
		// which takes the message object parameter from the template. 
		// This allows a level of indirection between what is invoked within the directive in the view, 
		// and what the directive evaluates to in its functional definition.
		// This allows us to declare multiple identical instances of the chore div, 
		// and each will maintain isolate scope and proper binding while correctly interfacing 
		// with the shared controller.

	}
})


app.directive("drink",function(){
	return{
		scope:{
			flavor:"@" //-> pass this as a string into the scope for the directive
		},
		template:'<div>{{flavor}}</div>'
		// link:function(scope,element,attrs){
		// 	scope.flavor=attrs.flavor;
		// }
	}
})



app.directive("drink2",function(){
	return{
		scope:{
			flavor:"=" //expecting an object not a string
		},
		template:'<input type="text" class="form-control" ng-model="flavor"/>' //setsup a binding both ways //double binding sent from the directive
	}
})

