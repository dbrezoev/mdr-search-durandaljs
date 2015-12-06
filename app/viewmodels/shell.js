define(['plugins/router', 'durandal/app', './user'], function (router, app, user) {
    return {
        router: router,
		loginURL: '',
		isLogin: user.loggedIn,
		username: user.username,
        /* search: function() {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            app.showMessage('Search not yet implemented...');
        }, */
        activate: function () {
            router.map([
                { route: ['', 'home'], title:'Welcome', moduleId: 'viewmodels/welcome', nav: true },
                { route: 'flickr', moduleId: 'viewmodels/flickr', hash: '#flickr', nav: true },
				{ route: 'about', title:'About Author', moduleId: 'viewmodels/about', hash: '#about', nav: true},
				{ route: 'login', moduleId: 'viewmodels/login', hash: '#login', nav: false }
            ]).buildNavigationModel();
            
            return router.activate();
        },
		
		
		logout: function(){
			user.logout();
            this.isLogin(false);
            this.username(null);
            router.navigate('home');
		}
		
    };
});