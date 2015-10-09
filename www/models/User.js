angular.module('BJA').factory('User', [
	function() {
		
		var User = persistence.define('User', {
			firstName: 'TEXT',
			lastName: 'TEXT',
			username: 'TEXT',
			email: 'TEXT'
		});
		
		User.prototype.save = function(callback) {
			
			persistence.add(this);
			persistence.flush(function() {
				callback && callback();
			});
			
		};
		
		return User;
	}
]);