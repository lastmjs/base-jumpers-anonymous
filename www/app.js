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
.controller('ViewJumpsController', ['$scope', 'Jump',
	function($scope, Jump) {
		
		$scope.showJumps = function(username) {
			
			Jump.getAllByUsername(username, function(jumps) {
				
				$scope.$apply(function() {
					$scope.jumps = jumps;
				});
				
			});
			
		};
		
		$scope.deleteJump = function(jump) {
			
			jump.executeDelete(function() {
			
				$scope.showJumps(jump.username);
				
			});
			
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
