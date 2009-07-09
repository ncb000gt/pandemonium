function pandemonium_init() {
    app.log('Loading Pandemonium Initialization');

    app.log('Creating required objects for functionality');
    var pm = root.get('pandemonium_manager');
    if (!pm) {
	pm = new PandemoniumManager();
	pm.id = 'pandemonium_manager';
	pm.title = "Pandemonoim Manager";
	root.add(pm);
    }

    app.log('Applying rewrite rules.');
    app.addRewriteRule('/pandemonium_manager', '/pandemonium_manager');

    app.log('Completed Pandemonium Initialization');
}