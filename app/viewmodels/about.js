//about author
define(['durandal/app', 'plugins/router', 'knockout'], function(app, router, ko){
	return {
		displayName: 'About Me',
		name: ko.observable(),
		company: ko.observable(),
		contact: ko.observable(),
		
		buttonText: "Show Details",
		
		activate: function(){
			var that = this;
			that.name('Tianze Jiang');
			that.company('Citrix');
			that.contact('+86 12345678901');
			
			return;
		},
		back: function(item)
		{
			//app.showMessage(item.name, "Show Details");
			router.navigate('home');
		},
		
		click: function(){
			app.showMessage("You clicked my name: " + this.name());
		}
	};
});