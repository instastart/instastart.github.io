var data = require("../data.json");

exports.profile = function(req, res) {    
	// Your code goes here
	var name = req.query.name;
	var f;
	for (var i = 0; i < data["friends"].length; i++) {
		if (data["friends"][i].name == name) {
			f = data["friends"][i];
			break;
		}
	}

	res.render('profile', f);
 }