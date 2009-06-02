function unauthorized() {
    if (app.getHits('PandemoniumUser', {}).length == 0) {
	return this.create_user();
    }

    if (postback) {

    }
}

function create_user() {
    if (app.getHits('PandemoniumUser', {}).length > 0) {
	return this.unauthorized();
    }

    var username = req.get('username');
    var password = req.get('password');
    var password_confirm = req.get('password_confirm');
    var postback = req.get('postback');

    if (postback) {
	if (username && password && password_confirm) {
	    if (password == password_confirm) {
		var pm = root.get('pandemonium_manager');
		var user = new PandemoniumUser();
		user.username = username;
		user.setPassword(password, 256);
		pm.add(user);
		res.redirect(pm.getURI());
	    }
	}
    }
}