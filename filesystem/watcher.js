const fs = require('fs')
fs.watch('target.txt',function(){
	console.log("File target changed")
});

console.log("Watching for changes!")
