define([ 'plugins/http', 'plugins/router', 'durandal/app', 'knockout'], function (http, router, app, ko) {
    //Note: This module exports an object.
    //That means that every module that "requires" it will get the same object instance.
    //If you wish to be able to create multiple instances, instead export a function.
    //See the "welcome" module for an example of function export.
	var baseApi = 'http://localhost:1314';
    var viewModel = {
        displayName: 'User',

		username: ko.observable(),
		password: ko.observable(),
		loggedIn: ko.observable(false),
		
		authUrl: '/auth/remotelogin',
        activate: function () {
			
        },
		login: function(user, pwd){
			this.loggedIn(true);
			this.username(user);
			this.password(pwd);
		},
		
		logout: function(){
			this.loggedIn(false);
		}
		
        /* canDeactivate: function () {
            //the router's activator calls this function to see if it can leave the screen
            return app.showMessage('Are you sure you want to leave this page?', 'Navigate', ['Yes', 'No']);
        } */
    };
	return viewModel;
});