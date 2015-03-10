'use strict';

app.controller("AppCntrl",function(){
	var self=this;
	self.loadMoreTweets=function(){
		console.log("Loading Tweets")
	}

	self.deleteTweets=function(){
		console.log("Deleting Tweets")
	}
})

app.controller("ChoreCntrl",function(){
	var self=this;
	self.cntrlFlavor1="blackberry"
	self.logChore=function(chore){
		console.log(chore+"completed")
	}
})