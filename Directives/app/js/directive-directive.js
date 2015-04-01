//check difference between link compile and controller
//difference evident in ng repeat
//link executed each time for each instance, 
//compile only once , doesnt have access to scope , modify the template , add classes to a template

app.directive("superhero",function(){
	return {
		restrict:"E",
		scope:{}, //isolates from other scopes
		controller:function($scope){
			$scope.abilities=[]

			this.addSpeed=function(){
				$scope.abilities.push("speed")
			}

			this.addFlight=function(){
				$scope.abilities.push("flight")
			}

			this.addStrength=function(){
				$scope.abilities.push("strength")
			}

		},

		link:function(scope,element){
			element.addClass("button");
			element.bind("mouseenter",function(){
				console.log(scope.abilities);
			})
		}
	}
});

app.directive("strength",function(){
	return{
		require:"superhero",
		link: function(scope,element,attrs,superheroCntrl){
			superheroCntrl.addStrength();

		}
	}
});


app.directive("speed",function(){
	return{
		require:"superhero",
		link: function(scope,element,attrs,superheroCntrl){
			superheroCntrl.addSpeed();

		}
	}
});


app.directive("flight",function(){
	return{		
		require:"superhero",
		link: function(scope,element,attrs,superheroCntrl){
			superheroCntrl.addFlight();

		}
	}
})