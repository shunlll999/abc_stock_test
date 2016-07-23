exports.getsample = function (req, res){
	res.send("Hello example");
}

exports.add = function (req,res){
	const x = req.params.x*1;
  	const y = req.params.y*1;
  	res.send({sum:x+y, message:"Hello world"});
}