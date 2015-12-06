define(['jquery', 'plugins/http', 'plugins/router', 'durandal/app', 'knockout', './user'], function ($, http, router, app, ko, user) {
    //Note: This module exports an object.
    //That means that every module that "requires" it will get the same object instance.
    //If you wish to be able to create multiple instances, instead export a function.
    //See the "welcome" module for an example of function export.
	var baseApi = 'http://localhost:1314';
    var viewModel = {
        displayName: 'Login',

		username: ko.observable().extend({
			required: {
				message: 'Username is required',
				params: true
			}
		}),
		password: ko.observable().extend({
			required: {
				message: 'Password is required',
				params: true
			}
		}),
		unDefault: 'Username',
		pwDefault: 'Password',
		loginText: 'Login',
		resetText: 'Reset',
		
		authUrl: '/auth/remotelogin',
        activate: function () {
			
        },
        post: function() {
			this.errors.showAllMessages();
			if(this.errors().length === 0){
				var that = this;
				var status = http.jsonp(baseApi + this.authUrl, { username: this.username(), password: this.password() }, "callback").done(function(response) {
					if(response.status)
					{
						//$("#login_status").children('a').text(that.username());
						//$("#login_status").children('a').attr('href', '#about');
						user.login(that.username(), that.password());
						
						router.navigate('home');
					}
					else if(response.errCode === -1)
						app.showMessage('Server error: cannot connect to database.');
					else if(response.errCode === 0)
						app.showMessage('MongoDB Error: cannot open collection.');
					else
						app.showMessage('Error: ' + response.errMsg);
				}).fail(function(xhr, textStatus, errorThrown) {//error/fail handler will not call for jsonp request!!! use post instead
				// refer to:http://api.jquery.com/jQuery.ajax/
					app.showMessage('API Calling Error: ' + xhr.responseText);
				});
				setTimeout(function(){
					if(status.readyState <= 1)
						app.showMessage('Network Error');
				}, 3000);
			}
        },
		
		reset: function(){
			this.username("");
			this.password("");
		},
		
        /* canDeactivate: function () {
            //the router's activator calls this function to see if it can leave the screen
            return app.showMessage('Are you sure you want to leave this page?', 'Navigate', ['Yes', 'No']);
        } */
    };
	viewModel.errors = ko.validation.group(viewModel);
	return viewModel;
});