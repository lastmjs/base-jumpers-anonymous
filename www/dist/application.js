angular.module('BJA', [])
.run(function() {
	persistence.store.websql.config(persistence, 'bja', 'the Base Jumpers Anonymous WebSQL database', 5 * 1024 * 1024);
	persistence.schemaSync();
})
.controller('MainController', ['$scope',
	function($scope) {
		$scope.showSignUpArea = true;
	}
])
.controller('SignUpController', ['$scope', 'User',
	function($scope, User) {
		
		$scope.signUp = function(firstName, lastName, username, email) {
			
			var user = new User();
			
			user.firstName = firstName;
			user.lastName = lastName;
			user.username = username;
			user.email = email;
			
			user.save(function() {
				alert('User saved!');
			});
		};
		
	}
])
.controller('ViewJumpsController', ['$scope',
	function($scope) {
		
		$scope.showJumps = function(username) {
			
			$scope.jumps = [
				{
					title: 'Half Dome',
					description: 'I hit the side of the rock!'
				},
				{
					title: 'San Francisco',
					description: 'Lol, my chute almost didn\'t come out'
				},
				{
					title: 'Eiffel Tower',
					description: 'It was fun'
				}
			];
			
		};
		
	}
])
.controller('CreateJumpController', ['$scope', 'Jump',
	function($scope, Jump) {
		
		$scope.createJump = function(title, description, username) {
			
			var jump = new Jump();
			
			jump.title = title;
			jump.description = description;
			jump.username = username;
			
			jump.save(function() {
				alert('Jump saved!');
			});
			
		};
		
	}
]);
angular.module('BJA').factory('Jump', [
	function() {
		
		var Jump = persistence.define('Jump', {
			title: 'TEXT',
			description: 'TEXT',
			username: 'TEXT'
		});
		
		Jump.prototype.save = function(callback) {
			
			persistence.add(this);
			persistence.flush(function() {
				callback && callback();
			});
			
		};
		
		return Jump;
	}
]);
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