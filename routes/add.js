var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	var name = req.query.name;
	var desc = req.query.description;
	var obj = {"name": name, "description": desc};
	console.log(obj);
	data["friends"].push(obj);

	res.render('addFriend', data);
 }