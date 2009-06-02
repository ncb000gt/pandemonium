function pandemonium_init() {
    app.log('Loading Pandemonium Initialization');
    var pm = root.get('pandemonium_manager');
    if (!pm) {
	pm = new PandemoniumManager();
	pm.id = 'pandemonium_manager';
	pm.title = "Home - Pandemonoim Manager";
	root.add(pm);
    }

    app.addRewriteRule('/pandemonium_manager', '/pandemonium_manager');
}