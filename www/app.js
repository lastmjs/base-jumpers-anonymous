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
.controller('CreateJumpController', ['$scope',
	function($scope) {
		
		$scope.createJump = function(title, description, username) {
			
			var jump = {
				title: title,
				description: description,
				username: username
			};
			
			alert('Title: ' + title + '\n' + 'Description: ' + description);
			
		};
		
	}
]);