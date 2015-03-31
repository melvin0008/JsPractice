"use script";
const fs=require('fs'),
    spawn= require('child-process').spawn,
   filename=process.arg[2];


fs.watch(filename, function() {
	let
	ls = spawn('ls', ['-lh', filename]),
	output = '';
	ls.stdout.on('data', function(chunk){
		output += chunk.toString();
	});
	ls.on('close', function(){
		let parts = output.split(/\s+/);
		console.dir([parts[0], parts[4], parts[8]]);
	});
});


