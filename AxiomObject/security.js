function isAllowed(action, roles) {
    if (roles && roles.contains('Administrator')) {
	return true;
    }

    return false;
}